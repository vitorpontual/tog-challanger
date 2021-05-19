import Redis, {Redis as RedisClient} from "ioredis"
import cacheConfig from "../backend/src/config/cache"
import ICacheProvider from "../ICacheProvider";

export default class CacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor(){
    this.client = new Redis(cacheConfig.config.redis)
  }

  async save(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);

    if(!data){
      return null
    }

    const parseData = JSON.parse(data) as T;

    return parseData;
  }

  async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  async invalidatePrefix(prefix: string): Promise<void> {
    const keys = await this.client.keys(`${prefix}:*`);

    const pipeline = this.client.pipeline();

    keys.forEach( key => {
      pipeline.del(key);
    })

    await pipeline.exec();
  }
}
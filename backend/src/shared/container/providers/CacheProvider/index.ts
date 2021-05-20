import { container } from "tsyringe";
import IChacheProvider from "./ICacheProvider";
import CacheProvider from "./implementations/CacheProviders";


container.registerSingleton<IChacheProvider>(
  "CacheProvider",
  CacheProvider
)
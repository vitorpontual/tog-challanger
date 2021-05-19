import { container } from "tsyringe";
import IChacheProvider from "./ICacheProvider";
import CacheProvider from "./implementations/CacheProvider";


container.registerSingleton<IChacheProvider>(
  "CacheProvider",
  CacheProvider
)
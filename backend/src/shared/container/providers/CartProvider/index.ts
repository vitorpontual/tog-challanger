import { container } from "tsyringe";
import { ICartProvider } from "./ICartProvider";
import { CartPorvider } from "./implementations/CartProvider";

container.registerSingleton<ICartProvider>(
  "CartProvider",
  CartPorvider
)
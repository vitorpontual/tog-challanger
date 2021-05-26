import { container } from "tsyringe";
import { ICartProvider } from "./ICartProvider";
import { CartProvider } from "./implementations/CartProvider";


container.registerSingleton<ICartProvider>(
  "CartProvider",
  CartProvider
)
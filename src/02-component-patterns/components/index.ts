import ProductImage from "./ProductImage";
import ProductButtons from "./ProductButtons";
import ProductTitle from "./ProductTitle";
import { ProductCardHOC } from "./ProductCard";
import { IProductCardHOC } from "../interfaces/ProductInterfaces";

const ProductCard: IProductCardHOC = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export {ProductButtons, ProductImage, ProductTitle}
export default ProductCard;
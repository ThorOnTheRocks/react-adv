import ProductImage from "./ProductImage";
import ProductButtons from "./ProductButtons";
import ProductTitle from "./ProductTitle";
import ProductCard from "./ProductCard";
import { IProductCardHOC } from "../interfaces/ProductInterfaces";

const ProductCardHOC: IProductCardHOC = Object.assign(ProductCard, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export {ProductButtons, ProductImage, ProductTitle}
export default ProductCardHOC;
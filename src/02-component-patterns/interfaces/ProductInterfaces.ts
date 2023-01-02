import { IProductCardProps } from "../components/ProductCard";
import { IProductTitleProps } from "../components/ProductTitle";
import { IProductImageProps } from "../components/ProductImage";
import { IProductButtonsProps } from "../components/ProductButtons";

export interface IProduct {
  id: string,
  title?: string,
  image?: string,
}

export interface IProductCardHOC {
  ({ children, product }: IProductCardProps): JSX.Element,
  Buttons: (Props: IProductButtonsProps) => JSX.Element,
  Image:   (Props: IProductImageProps) => JSX.Element,
  Title:   (Props: IProductTitleProps) => JSX.Element,
}

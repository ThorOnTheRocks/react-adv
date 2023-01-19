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

export interface IOnChangeArgs {
  product: IProduct,
  count: number
}

export interface IProductInCart extends IProduct {
  count: number,
}

export interface IInitialValues {
  count?: number,
  maxCount?: number,
}

export interface IProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: IProduct,

  handleCounter: (value: number) => void,
  reset: () => void,

}
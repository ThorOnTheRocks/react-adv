import { ReactElement } from "react";


export interface IProductCardProps {
  product: IProduct,
  children?: ReactElement | ReactElement[]
}

export interface IProduct {
  id: string,
  title: string,
  image?: string,
}

export interface IProductContextProps {
  counter: number,
  handleCounter: (value: number) => void,
  product: IProduct,
}

export interface IProductCardHOC {
  ({ children, product }: IProductCardProps): JSX.Element,
  Title: ({ title }: { title: string }) => JSX.Element,
  Image: ({ image }: { image?: string }) => JSX.Element,
  Buttons: () => JSX.Element,
}

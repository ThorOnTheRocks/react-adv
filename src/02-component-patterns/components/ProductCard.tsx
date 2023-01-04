import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { createContext } from "react"
import { IProduct, IOnChangeArgs } from '../interfaces/ProductInterfaces';

export interface IProductCardProps {
  product: IProduct,
  children?: React.ReactElement | React.ReactElement[],
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args: IOnChangeArgs) => void,
  value?: number,
}

export interface IProductContextProps {
  counter: number,
  handleCounter: (value: number) => void,
  product: IProduct,
}

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({children, product, className, style, onChange, value}: IProductCardProps ) => {
  const {counter, handleCounter} = useProduct({ onChange, product, value });
  return (
    <Provider value={{
      counter,
      handleCounter,
      product
    }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
};


export {ProductCard as ProductCardHOC};

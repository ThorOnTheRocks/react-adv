import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { createContext } from "react"
import { IProduct, IOnChangeArgs, IInitialValues, IProductCardHandlers } from '../interfaces/ProductInterfaces';

export interface IProductCardProps {
  product: IProduct,
  // children?: React.ReactElement | React.ReactElement[],
  children: (args: IProductCardHandlers) => JSX.Element,
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args: IOnChangeArgs) => void,
  value?: number,
  initialValues?: IInitialValues,
}

export interface IProductContextProps {
  counter: number,
  handleCounter: (value: number) => void,
  product: IProduct,
  maxCount?: number,
}

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({children, product, className, style, onChange, value, initialValues}: IProductCardProps ) => {
  const {counter, handleCounter, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues });
  return (
    <Provider value={{
      counter,
      handleCounter,
      maxCount,
      product
    }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          handleCounter,
          reset
        })}
      </div>
    </Provider>
  );
};


export {ProductCard as ProductCardHOC};

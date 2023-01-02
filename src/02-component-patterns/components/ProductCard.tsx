import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { IProductCardProps, IProductContextProps } from '../interfaces/ProductInterfaces';
import { createContext } from "react"

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({children, product}: IProductCardProps ) => {
  const {counter, handleCounter} = useProduct();
  return (
    <Provider value={{
      counter,
      handleCounter,
      product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};


export {ProductCard as ProductCardHOC};

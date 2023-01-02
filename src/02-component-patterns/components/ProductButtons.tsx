import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface IProductButtonsProps {
  className?: string,
  style?: React.CSSProperties
}

const ProductButtons = ({className, style}: IProductButtonsProps) => {

  const {counter, handleCounter} = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={`${styles.buttonMinus} ${className}`} onClick={() => handleCounter(-1)}> - </button>
      <div className={`${styles.countLabel} ${className}`}>{counter}</div>
      <button className={`${styles.buttonAdd} ${className}`} onClick={() => handleCounter(+1)}> + </button>
    </div>
  )
}

export default ProductButtons;
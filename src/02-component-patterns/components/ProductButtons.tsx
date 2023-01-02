import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

const ProductButtons = () => {

  const {counter, handleCounter} = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => handleCounter(-1)}> - </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => handleCounter(+1)}> + </button>
    </div>
  )
}

export default ProductButtons;
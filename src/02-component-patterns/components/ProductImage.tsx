import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

const ProductImage = ({image = ''}) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if(image) {
    imgToShow = image
  } else if (product.image) {
    imgToShow = product.image
  } else {
    imgToShow = noImg
  }
  
  return (
    <img src={imgToShow} alt='coffee mug' className={styles.productImg}/>
  )
}

export default ProductImage
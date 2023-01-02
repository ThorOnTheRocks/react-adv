import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface IProductImageProps {
  image?: string,
  className?: string,
  style?: React.CSSProperties
}

const ProductImage = ({ image, className, style }: IProductImageProps) => {
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
    <img 
      src={imgToShow} 
      alt='coffee mug' 
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  )
}

export default ProductImage
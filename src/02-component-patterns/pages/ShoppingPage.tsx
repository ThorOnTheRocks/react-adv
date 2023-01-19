import { ProductImage, ProductTitle, ProductButtons } from "../components";
import ProductCard from "../components";

import { products } from "../data/products";
import '../styles/custom-styles.css';

const product = products[0];


const ShoppingPage = () => {
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
        <ProductCard 
          key={product.id}
          product={product} 
          className="bg-dark text-white"
          initialValues={{
            count: 0,
            maxCount: 10
          }}
        >
          {
            ({reset, handleCounter, maxCount, isMaxCountReached, count}) => (
              <>
                <ProductImage 
                  className='custom-image'
                  style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.3)'}}
                />
                <ProductTitle className='text-white text-bold'/>
                <ProductButtons className='custom-button'/> 
                <button onClick={reset}>Reset</button>
                <button onClick={() => handleCounter(-2)}>-2</button>
                {(!isMaxCountReached &&
                  <button onClick={() => handleCounter(+2)}> +2 </button>
                )}
                <span>{count} - {maxCount}</span>
              </>
            )
          }
        </ProductCard>
      </div>
  );
};

export default ShoppingPage;

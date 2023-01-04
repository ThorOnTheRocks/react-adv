import { ProductImage, ProductButtons } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import ProductCard from "../components";

import { products } from "../data/products";
import '../styles/custom-styles.css';


const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange} = useShoppingCart()
  
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {products.map(product => {
          return (
          <>
            <ProductCard 
              key={product.id}
              product={product} 
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductCard.Image className='custom-image'/>
              <ProductCard.Title className='text-white text-bold'/>
              <ProductCard.Buttons className='custom-button'/> 
            </ProductCard>
          </>
          )
        })}
        
      <div className="shopping-cart">
        <>
          {
            Object.entries(shoppingCart).map( ([key, product]) => (
              <>
                <ProductCard
                  key={key}
                  product={product}
                  className="bg-dark text-white"
                  style={{ width: '100px'}}
                  onChange={onProductCountChange}
                  value={product.count}
                >
                  <ProductImage className='custom-image'/>
                  <ProductButtons 
                    className='custom-button'
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  />
                </ProductCard>
            </>
            ))
          }
        </>
      </div>
      </div>
    </div>
  );
};

export default ShoppingPage;

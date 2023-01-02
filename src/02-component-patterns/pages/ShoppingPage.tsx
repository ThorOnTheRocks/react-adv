import { ProductImage, ProductButtons, ProductTitle } from "../components";
import ProductCardHOC from "../components";

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  image: './coffee-mug.png',
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCardHOC product={product}>
          <ProductCardHOC.Image />
          <ProductCardHOC.Title title={'Coffee Mug'} />
          <ProductCardHOC.Buttons /> 
        </ProductCardHOC>

        <ProductCardHOC product={product}>
          <ProductImage />
          <ProductTitle title='' />
          <ProductButtons />
        </ProductCardHOC>
      </div>
    </div>
  );
};

export default ShoppingPage;

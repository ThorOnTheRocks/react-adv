import { ProductImage, ProductButtons, ProductTitle } from "../components";
import ProductCard from "../components";

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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Coffee Mug'} />
          <ProductCard.Buttons /> 
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='' />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;

import { useState } from 'react';
import { IProduct, IProductInCart } from '../interfaces/ProductInterfaces';



export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: IProductInCart  }>({});

    const onProductCountChange = ({ count, product }: { count:number, product: IProduct }) => {
        // console.log( count, product);
        
        setShoppingCart( oldShoppingCart => {

            const productInCart: IProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
            return rest;


            // if( count === 0 ) {
                // const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
                // return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: { ...product, count }
            // }
        })

    }

    return {
        shoppingCart,
        onProductCountChange,
    }

}
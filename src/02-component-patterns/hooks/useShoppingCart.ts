import { useState } from 'react';
import { IProduct, IProductInCart } from '../interfaces/ProductInterfaces';



export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: IProductInCart  }>({});

    const onProductCountChange = ({ count, product }: { count:number, product: IProduct }) => {
        // console.log( count, product);
        
        setShoppingCart( oldShoppingCart => {
            if( count === 0 ) {
                const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        })

    }

    return {
        shoppingCart,
        onProductCountChange,
    }

}
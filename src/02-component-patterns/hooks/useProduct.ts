import { useEffect, useState } from 'react'
import { IOnChangeArgs, IProduct } from '../interfaces/ProductInterfaces';


interface IUseProductArgs {
    product: IProduct;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
}


const useProduct = ({ onChange, product, value = 0 }: IUseProductArgs) => {

    const [ counter, setCounter ] = useState( value );

    const handleCounter = ( value: number ) => {
      const newValue = Math.max( counter + value, 0 )
      setCounter( newValue );

      onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( value );
    }, [ value ])

    return {
        counter,
        handleCounter
    }

}

export default useProduct
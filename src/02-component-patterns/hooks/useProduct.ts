import { useEffect, useRef, useState } from 'react'
import { IInitialValues, IOnChangeArgs, IProduct } from '../interfaces/ProductInterfaces';


interface IUseProductArgs {
    product: IProduct;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
    initialValues?: IInitialValues
}


const useProduct = ({ onChange, product, value = 0, initialValues }: IUseProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value);

    const isMounted = useRef(false)

    const handleCounter = ( value: number ) => {
      const newValue = Math.max( counter + value, 0 )
      setCounter( newValue );

      onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        if (!isMounted.current) return

        setCounter( value );
    }, [ value ])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        counter,
        handleCounter
    }

}

export default useProduct
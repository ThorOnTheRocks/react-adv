import { useEffect, useRef, useState } from 'react'
import { IInitialValues, IOnChangeArgs, IProduct } from '../interfaces/ProductInterfaces';


interface IUseProductArgs {
    product: IProduct;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
    initialValues?: IInitialValues;
}


const useProduct = ({ onChange, product, value = 0, initialValues }: IUseProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value);

    const isMounted = useRef(false)

    const handleCounter = ( value: number ) => {
      let newValue = Math.max( counter + value, 0 )
      if (initialValues?.maxCount) {
        newValue = Math.min(newValue, initialValues.maxCount)
    }
      setCounter( newValue );

      onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
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
        handleCounter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset,
    }

}

export default useProduct
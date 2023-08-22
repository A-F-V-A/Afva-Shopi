import { useContext } from 'react'
import { ShopiContext } from '../Context'



export const useShopi = () =>{

    const { onProduct,shopiState } = useContext(ShopiContext)

    return {
        addProduct: onProduct,
        ...shopiState
    }

}
import { useReducer } from 'react'
import { ShopiContext, shopiReducer } from './index'
import { StateProduct } from '../Model'

const INITIAL_STATE:StateProduct = {
    count:0
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ShopiProvider = ({ children }:Props) =>{

    const [shopiState, dispatch] = useReducer(shopiReducer,INITIAL_STATE)

    const onProduct = (id:number):void =>{
        dispatch({ type:'addProduct', payload:{ id }})
    }

    return (
        <ShopiContext.Provider value={{
            shopiState,
            onProduct
        }}>
            {children}
        </ShopiContext.Provider>
    )
}
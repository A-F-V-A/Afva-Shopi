import { createContext } from 'react'
import { StateProduct } from '../Model'

export type ShopiContextProps = {
    shopiState: StateProduct;
    onProduct: (id:number) => void;
} 

export const ShopiContext = createContext<ShopiContextProps>( {} as ShopiContextProps)
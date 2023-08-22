import { StateProduct } from "../Model";

type ShopiAction = 
    | { type: 'addProduct', payload: StateProduct } 
    | { type: 'addProduct', payload: {id:number}  }

export const shopiReducer = ( state:StateProduct, action:ShopiAction ) : StateProduct =>{

    const { type }  = action
    const { count } = state

    switch (type) {
        case 'addProduct':
          return { count : count + 1 }
        default:
            return state
    }
}
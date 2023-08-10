import { Routes, Route } from "react-router-dom"
import { 
        Home,
        MyAccount,
        MyOrder,
        MyOrders,
        NotFound,
        SignIn 
} from '../Pages'

export const AppRouter = () =>{
    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/my-account" element={<MyAccount/>}/>
            <Route path="/my-order" element={<MyOrder/>}/>
            <Route path="/my-orders" element={<MyOrders/>}/>
            <Route path="/sing-In" element={<SignIn/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
}
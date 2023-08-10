import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../Routes/indext"
import { Navbar } from "../Components"
import './css/index.css'

export const App = () => {
  return (
    <>
        <BrowserRouter>
            <AppRouter/>
            <Navbar/>
        </BrowserRouter>
    </>
  )
}


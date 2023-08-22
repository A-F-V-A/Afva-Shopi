import { BrowserRouter } from "react-router-dom"
import { ShopiProvider } from "../Context"
import { AppRouter } from "../Routes/indext"
import { Navbar } from "../Components"
import './css/index.css'

export const App = () => {
  return (
    <ShopiProvider>
        <BrowserRouter>
            <AppRouter/>
            <Navbar/>
        </BrowserRouter>
    </ShopiProvider>
  )
}
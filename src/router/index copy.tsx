import App from '../App'
import Home from "../views/Home"
import About from "../views/Page301"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// BrowserRouter(History模式) HashRouter(Hash模式)

// const baseRouter = () => {
//     return ()
// }
// 以上写法可简写为
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Navigate to="/home" />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter
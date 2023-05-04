import {Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home/home";
import Shows from "./Pages/show/show"

const routes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:show" element={<Shows/>}/>
        </Routes>
    )
        

}

export default routes;
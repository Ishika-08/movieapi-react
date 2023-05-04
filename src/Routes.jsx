import {Route, Routes} from 'react-router-dom';
import Home from "./Pages/home";

const routes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
        

}

export default routes;
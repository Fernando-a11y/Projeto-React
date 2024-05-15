import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade01 from "./Atividade01/atividade01";
import Atividade02 from "./Atividade02/Atividade02";
import Atividade02 from "./Atividade03/Atividade03";


export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Atividade01" element={<Atividade01/>}/>
                <Route path="/Atividade02" element={<Atividade02/>}/>
                <Route path="/Atividade03" element={<Atividade03/>}/>
            </Routes>
        </BrowserRouter>
    );
}

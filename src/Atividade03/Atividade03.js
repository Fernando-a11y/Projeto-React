import Profile from "./Componentes/Profile";
import Gallery from "./Componentes/Gallery";
import  JSX    from  "./Componentes/JSX";
import Date from "./Componentes/Date"
import {Link} from "react-router-dom";

function Atividade03(){
    return(
        <>
         <h1 class="certer"> Atividade 03  </h1>
         <Profile />
         <Gallery/>
         <JSX/>
         <Date/>
        
         <div className="container">
         <Link to={"/"}>⇐ VOLTAR</Link>
         </div>
        </>
    )
}
export default Atividade03;

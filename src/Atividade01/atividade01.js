import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";
function Atividade01() {
  return (
    <>
      <h1 className="title">Atividade 1</h1>
      <Letreiro />
      <Relogio />
      <span> <Link to={"/"}>Voltar</Link></span>
    </>
  );
}

export default Atividade01;

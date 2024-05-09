import { Link } from "react-router-dom";
import './Atividade04.css';
import JogoDaMemoria from "./JogoDaMemoria";

function Atividade04() {
  return (
    <>
      <h1 className="title">Atividade 5</h1>
      <JogoDaMemoria />
      <span> <Link to={"/"}>⇐ VOLTAR</Link></span>
    </>
  );
}

export default Atividade04;

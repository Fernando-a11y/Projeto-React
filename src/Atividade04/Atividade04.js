import { Link } from "react-router-dom";
import './Atividade04.css';
import JogoDaMemoria from "./JogoDaMemoria";

function Atividade04() {
  return (
    <>
      <h1 className="title">Jogo da Memória</h1>
      <JogoDaMemoria />
      <span> <Link to={"/"}>⇐ VOLTAR</Link></span>
    </>
  );
}

export default Atividade04;

import React from 'react';
import { Link } from 'react-router-dom';
import './Atividade05.css';
import Calculadora from './Calculadora';

function Atividade05() {
  return (
    <>
      <h1 className="title">Atividade 4</h1>
      <Calculadora />
      <span><Link to={"/"}>⇐ VOLTAR</Link></span>
    </>
  );
}

export default Atividade05;

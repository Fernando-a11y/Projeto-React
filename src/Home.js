import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Tarefas em React  😄</h1>
      <nav>
        <ul>  
          <li>
            <Link to={"/Atividade01"}>Atividade 1 - Letreiro e Relogio </Link>
          </li>
          <li>
            <Link to={"/Atividade0"}>Atividade 2 - </Link>
          </li>
          <li>
            <Link to={"/Atividade0"}>Atividade 3 - </Link>
          </li>
          <li>
            <Link to={"/Atividade0"}>Atividade 4 - </Link>
          </li>
          <li>
            <Link to={"/Atividade0"}>Atividade 5 - </Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Home;

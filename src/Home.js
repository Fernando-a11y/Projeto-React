import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Atividade em React</h1>
      <nav>
        <ul>  
          <li>
            <Link to={"/Atividade01"}>Atividade 1 - Letreiro e Relogio </Link>
          </li>
          <li>
            <Link to={"/Atividade02"}>Atividade 2 - Conatdor de Pessoa </Link>
          </li>
          
        
        </ul>
      </nav>
      
    </div>
  );
}

export default Home;

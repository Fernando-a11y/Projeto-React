import React, { useState } from 'react';
import imgHomem from './imagens/homem.png'; //Imagem Homem
import imgMulher from './imagens/mulher.png'; //Imagem Humlher
import imgAtualizar from './imagens/atualizar.png'; //Imagem Atualizar
import imgMais from './imagens/mais.png'; //Imagem mais
import imgMenos from './imagens/menos.png'; //Imagem menos
import './Contador.css';

function Contador () {
  const [homemCount, setHomemCount] = useState(0); // contador relacionado aos homens.
  const [mulherCount, setMulherCount] = useState(0); // contador relacionado às mulheres.
  const [count, setCount] = useState(0); // contador global

  function atualizarCount() {
    setCount(0);
    setHomemCount(0);
    setMulherCount(0);
  }

  function addCount() { // Adiciona
    setCount(count + 1);
  }

  function menosCount() { // Retira
    setCount(count - 1);
  }

  function addHomemCount() { // Adiciona homem
    setHomemCount(homemCount + 1);
    addCount();
  }

  function addMulherCount() { // Adiciona mulher
    setMulherCount(mulherCount + 1);
    addCount();
  }

  function menosHomemCount() { //Menos homem
    setHomemCount(homemCount - 1);
    menosCount();
  }

  function menosMulherCount() { // Menos mulher
    setMulherCount(mulherCount - 1);
    menosCount();
  }

  return (
    <div className='Contador-cont-comple'>
      <div className='Contador-header'>
        <h1 className='Contador-titulo'>TOTAL</h1>
        <button className='Contador-button' onClick={atualizarCount}>
          <img className='Contador-button-img' src={imgAtualizar} />
        </button>
      </div>
      <p className='Contador-cont'>{count}</p>
      <div className='Contador-body'>
        <div className='Contador-pessoa'>
          <img src={imgHomem} />
          <div className='Contador-buttons'>
            <button className='Contador-button' onClick={addHomemCount}>
              <img className='Contador-button-img' src={imgMais}/>
            </button>
            <button className='Contador-button' onClick={menosHomemCount}>
              <img className='Contador-button-img' src={imgMenos}/>
            </button>
          </div>
          <h1>TOTAL</h1>
          <p className='Contador-cont'>{homemCount}</p>
        </div>
        <div className='Contador-pessoa'>
          <img src={imgMulher}/>
          <div className='Contador-buttons'>
            <button className='Contador-button' onClick={addMulherCount}>
              <img className='Contador-button-img' src={imgMais}/>
            </button>
            <button className='Contador-button' onClick={menosMulherCount}>
              <img className='Contador-button-img' src={imgMenos}/>
            </button>
          </div>
          <h1>TOTAL</h1>
          <p className='Contador-cont'>{mulherCount}</p>
        </div>
      </div>
    </div>
  );
}
export default Contador;

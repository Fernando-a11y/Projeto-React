import React, { useState } from 'react';
import imgHomem from './imagens/homem.png';
import imgMulher from './imagens/mulher.png'; 
import imgAtualizar from './imagens/atualizar.png'; 
import imgMais from './imagens/mais.png'; 
import imgMenos from './imagens/menos.png'; 
import './Contador.css';

function Contador () {
  const [homemCount, setHomemCount] = useState(0); 
  const [mulherCount, setMulherCount] = useState(0); 
  const [count, setCount] = useState(0); 

  function atualizarCount() {
    setCount(0);
    setHomemCount(0);
    setMulherCount(0);
  }

  function addCount() { 
    setCount(count + 1);
  }

  function menosCount() { 
    setCount(count - 1);
  }

  function addHomemCount() { 
    setHomemCount(homemCount + 1);
    addCount();
  }

  function addMulherCount() { // 
    setMulherCount(mulherCount + 1);
    addCount();
  }

  function menosHomemCount() {
    setHomemCount(homemCount - 1);
    menosCount();
  }

  function menosMulherCount() { 
    setMulherCount(mulherCount - 1);
    menosCount();
  }

  return (
    <div className='Contador-Total'>
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

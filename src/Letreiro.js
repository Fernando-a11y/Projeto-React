import React from 'react';

class Letreiro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      indiceAtual: 0
    };
  }

  componentDidMount() {
    this.simularDigitacaoLoop();
  }

  simularDigitacaoLoop = () => {
    const texto = 'Conheça Fatec';
    const { indiceAtual } = this.state;
    const proximoIndice = (indiceAtual + 1) % texto.length;

    setTimeout(() => {
      this.setState({ texto: texto.slice(0, indiceAtual + 1), indiceAtual: proximoIndice }, () => {
        if (proximoIndice === 0) {
          setTimeout(this.simularDigitacaoLoop, 1500); 
        } else {
          this.simularDigitacaoLoop();
        }
      });
    }, 200); // 
  }

  render() {
    return (
      <div>
        <p>{this.state.texto}</p>
      </div>
    );
  }
}

export default Letreiro;

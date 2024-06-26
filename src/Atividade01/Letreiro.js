import React from 'react';

class Letreiro extends React.Component {
  constructor(props) {
    super(props);
    this.textoTotal = " Conheça a Fatec";
    this.i = 0;
    this.state = {
      texto: "",
    };
    setInterval(() => {
      this.atualizarTexto();
    }, 1200);
  }

  atualizarTexto() {
    if (this.i < this.textoTotal.length-1) {
      this.setState((prevState) => ({
        texto: prevState.texto + this.textoTotal[this.i],
      }));
      this.i++;
    } else {
      this.i = 0;
      this.texto = "";
      this.setState(() => ({
        texto: "",
        i: 0
    }));
    }
  }

  render() {
    const { texto } = this.state;
    return (
      <div>
        <h1>{texto}</h1>
      </div>
    );
  }
}

export default Letreiro;

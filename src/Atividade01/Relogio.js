import React from 'react';
import './Relogio.css';

class Relogio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      horario: new Date(),
    };
  }

  atualizarHorario() {
    this.setState({ horario: new Date() });
  }

  render() {
    setInterval(() => {
      this.atualizarHorario();
    }, 1000);
    const { horario } = this.state;
    const formated_horario = horario.toLocaleTimeString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    return (
      <div>
        <h2>{formated_horario}</h2>
      </div>
    );
  }
}

export default Relogio;

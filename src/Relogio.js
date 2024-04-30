import React from 'react';

class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      currentDateTime: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <div>
        <p>Data e Hora Atuais: {this.state.currentDateTime}</p>
      </div>
    );
  }
}

export default Relogio;

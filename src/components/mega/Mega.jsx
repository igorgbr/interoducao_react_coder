import React from 'react';

import Form from './Form';


export default class Contador extends React.Component {
  state = {
    ArrayLength: this.props.ArrayLength || 7,
  };

  setArrayLength = (newArrayLength) => {
    this.setState({
        ArrayLength: newArrayLength,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Numeros da Mega-Sena:</h2>
        <Form ArrayLength={this.state.ArrayLength} setArrayLength={this.setArrayLength}/>

        <button>Go</button>
      </div>
    );
  }
}

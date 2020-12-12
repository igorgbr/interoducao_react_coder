import React from 'react';
import Display from './Display'

export default (props) => {
  return (
    <div>
      <Display ArrayLength={props.ArrayLength}/>
      <label htmlFor="passoInput">Qtd de numeros: </label>
      <input
        id="passoInput"
        type="number"
        value={props.ArrayLength}
        onChange={(e) => props.setArrayLength(+e.target.value)}
      ></input>
    </div>
  );
};

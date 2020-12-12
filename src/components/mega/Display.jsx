import React from 'react';

const gerarArray = (ArrayLength) => {
  let arrayNumber = [];

  for (let i = 0; arrayNumber.length < ArrayLength; i++) {
    const numb = parseInt(Math.random() * 59);
    if (!arrayNumber.includes(numb)) {
      arrayNumber.push(numb);
    }
  }

  return arrayNumber.sort((a, b) => a - b);
};
export default (props) => {
  console.log(props);
  return (
    <div>
      {gerarArray(props.ArrayLength).map((e) => 
        e < 10 ? `0${e}` : `${e}`
      ).join(' ')}
    </div>
  );
};

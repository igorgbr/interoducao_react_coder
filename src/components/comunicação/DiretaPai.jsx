import React from 'react';
import DiretaFilho from './DiretaFilho';
export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Jorge" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Sara" idade={16} nerd={true}></DiretaFilho>
    </div>
  );
};

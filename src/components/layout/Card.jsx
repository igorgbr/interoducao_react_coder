import React from 'react';
import './Card.css';

export default (props) => {
  const CardStyle = {
    backgroundColor: props.color || '#f00',
    borderColor: props.color || '#f00',
  };
  return (
    <div className="Card" style={CardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};

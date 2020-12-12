import React, { cloneElement } from 'react';

export default (props) => {
  return (
    <div>
      {props.children.map((child, key) => {
        return cloneElement(child, {...props, key});
      })}
    </div>
  );
};

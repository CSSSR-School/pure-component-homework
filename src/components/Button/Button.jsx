import React from 'react';

export const Button = (props) => {
  console.log('Render Button')

  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

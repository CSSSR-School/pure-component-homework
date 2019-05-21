import React from 'react';

export const Input = (props) => {
  console.log('Render Input');

  return (
    <input 
      type={props.type} 
      onChange={props.onChange} 
      value={props.value} 
      style={props.style}
    />
  )
}


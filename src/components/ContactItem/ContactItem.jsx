import React from 'react';
import { Button } from '../Button/Button';

import './index.css';

export const ContactItem = (props) => {
  console.log('Render Item');
  
  const { className, style, name, phone, index, handleRemoveContact } = props;

  return (
    <li style={style} className={className}>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <Button onClick={() => handleRemoveContact(index)}>
        Удалить
      </Button>
    </li>
  );
}

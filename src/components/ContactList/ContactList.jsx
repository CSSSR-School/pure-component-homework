import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';

import './index.css';

export const ContactList = (props) => {
  console.log('Render ContactList');

  return (
    <ul className="contact-list">
      {props.items.map((item, index) => (
        <ContactItem 
          key={index}
          className='contact-item' 
          name={item.name} 
          phone={item.phone}
          index={item.id}
          handleRemoveContact={props.handleRemoveContact}
          style={{
            color: index % 2 ? 'gray' : 'black'
          }}
        />
      ))}
    </ul>
  )
}
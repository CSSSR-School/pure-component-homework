import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

import './index.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      id: Date.now(),
    }
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangePhone(e) {
    this.setState({ phone: e.target.value });
  }

  handleClick() {
    this.setState({ id: Date.now() });
    this.props.handleAddContact(this.state);
  }

  render() {
    console.log('Render Form')

    return (
      <div className="contact-form">
        Имя:
        <Input 
          type="text" 
          value={this.state.name} 
          onChange={this.handleChangeName.bind(this)}
          style={{
            marginLeft: '20px',
            marginRight: '20px',
          }}
        />
        Телефон: 
        <Input 
          type="text"
          value={this.state.phone} 
          onChange={this.handleChangePhone.bind(this)}
          style={{
            marginLeft: '20px',
            marginRight: '20px',
          }}
        />
        <Button onClick={this.handleClick.bind(this)}>
          Добавить
        </Button>
      </div>
    )
  }
}
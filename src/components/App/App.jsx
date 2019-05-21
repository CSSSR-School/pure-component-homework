import React from 'react';
import { ContactList } from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';

import './index.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [],
    }
  }

  handleAddContact(data) {
    const contactItem = data;

    this.setState({
      contactList: [...this.state.contactList, contactItem]
    });
  }

  handleRemoveContact(id) {
    this.setState({
      contactList: this.state.contactList.filter((item) => item.id !== id)
    });
  }

  render() {
    console.log('Render App')

    const { contactList } = this.state;

    return (
      <div className='app'>
        <ContactForm 
          handleAddContact={this.handleAddContact.bind(this)} 
        />
        <ContactList 
          items={contactList}
          handleRemoveContact={this.handleRemoveContact.bind(this)}
        />
      </div>
    )
  }
}
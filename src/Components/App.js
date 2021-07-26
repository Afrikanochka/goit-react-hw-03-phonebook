import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

class App extends Component {
    state = { 
        contacts: [],
          filter: '',
         
     }

     formHandleSubmit = ({ name, number}) => {
         
         const {contacts} = this.state;
         if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase(),
         )) {
            alert(`${name} is already in contacts.`);
         } else {
             this.setState(({contacts}) => {
                 return {
                     contacts: [...contacts, {name, number, id: uuidv4()}]
                 };
             });
         }
     };

    deleteContact = (contactId) => {
        this.setState((prev) => ({
            contacts: prev.contacts.filter((contact) => contact.id !== contactId),
        }))
    }

    changeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value });
      };

    getCurrentContacts = () => {
        const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    }

    render() {
        const {filter} = this.state;
        const currentContactList = this.getCurrentContacts();
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formHandleSubmit} />
                <h2>Contacts</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList contacts={currentContactList} onDeleteContact={this.deleteContact} />

            </div>
        );
    }
}

export default App;


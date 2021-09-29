import React, { Component } from 'react';
import ContactsForm from './contacts/ContactsForm';
import ContactsList from './contacts/ContactsList';
import Filter from './filter/Filter';

class App extends Component {
    state = { 
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
          ],
        filter: ''
    };

    addContact = (contact) => {
        const {contacts} = this.state;
        const isCopy = contacts.some((item) => 
               item.name.toLowerCase() === contact.name.toLowerCase()
            );
        if(isCopy) {
            alert(`${contact.name} is already in contacts.`);
            return;
        }
        this.setState((prev) => ({
            contacts: [...prev.contacts, contact]
        }));
    };

    onFilterChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value });
    };

    contactsFilter = (e) => {
        const {contacts, filter} = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    render() {
        const visibleContacts = this.contactsFilter();
        return (
            <main>
                <h1>Phonebook</h1>
                <ContactsForm addContact={this.addContact}/>
                <Filter 
                    value={this.state.filter} 
                    onChange={this.onFilterChange}
                />
                <h2>Contacts</h2>
                <ContactsList contacts={visibleContacts}/>
            </main>

        );
    }
}

export default App;
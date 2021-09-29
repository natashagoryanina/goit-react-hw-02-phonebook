import React from 'react';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({contacts, removeContactById}) => {
    return (
        <ul>
            {contacts.map((contact)=> 
                <ContactsListItem contact={contact} removeContactById={removeContactById}/>
            )}
        </ul>
    );
};

export default ContactsList;
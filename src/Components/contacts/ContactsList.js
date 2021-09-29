import React from 'react';

const ContactsList = ({contacts}) => {
    return (
        <ul>
            {contacts.map((contact)=> 
                <li>{contact.name}: {contact.number}</li>
            )}
        </ul>
    );
}

export default ContactsList;
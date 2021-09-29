import React from 'react';

const ContactsListItem = ({contact, removeContactById}) => {
    const remove = () => removeContactById(contact.id);
    return (
        <li>
            <span>{contact.name}: {contact.number}</span>
            <button type="button" onClick={remove}>Delete</button>
        </li>
    );
};

export default ContactsListItem;
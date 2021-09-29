import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactsForm extends Component {
    state = { 
        name: '',
        number: ''
    };

    onFormChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addContact({name:this.state.name, id:uuidv4(), number:this.state.number});
    };
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                    Name:
                    <label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.onFormChange}
                            value={this.state.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>
                    Number:
                    <label>
                        <input
                            type="tel"
                            name="number"
                            onChange={this.onFormChange}
                            value={this.state.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            />
                    </label>
                    <button type="submit">
                        Add contact
                    </button>
            </form>
        );
    }
}

export default ContactsForm;
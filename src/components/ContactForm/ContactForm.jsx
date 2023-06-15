import {useState} from "react";
import { nanoid } from "nanoid";

import css from './contactForm.module.css'

function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = event => {
        setName( event.currentTarget.value );
    };

    const handleNumberSubmit = event => {
        setNumber( event.currentTarget.value );
    };

    const reset = () => {
        setName('');
        setNumber('');
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ id: nanoid(), name: name, number: number });
        reset();
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleNameChange}
                    value={name}
                    className={css.input}
                />
            
            <label className={css.label}>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleNumberSubmit}
                    value={number}
                    className={css.input}
            />
            
            <button type="submit" className={css.button}>Add contact</button>
        </form>
    )
}

export default ContactForm;
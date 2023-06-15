import {useState, useEffect, useMemo} from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import css from './app.module.css'

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts',JSON.stringify(contacts))
  }, [contacts]);

  const formSubmit = ({ id, name, number }) => {
    if (contacts) {
      const names = contacts.map(contact => contact.name);
    
      const lowerCaseName = name.toLowerCase();
      const lowerCaseNames = names.map(name => name.toLowerCase());
      if (lowerCaseNames.includes(lowerCaseName)) {
        alert(`${name} is already in Contacts!`);
        return;
      }
    
      setContacts(contacts => [{ id, name, number }, ...contacts]);
    
    }
    else {
      this.setState({ contacts: { id, name, number } })
    }
  } 

  const filterContacts = useMemo(() => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }, [contacts, filter]);
    
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  }

  
  return (
    <div className={css.container}>
      <section className={css.section}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm className={css.form} onSubmit={formSubmit} />
      </section>
      <section className={css.section}>
        <Filter filter={filter} setFilter={setFilter}/>
        <ContactList contacts={filterContacts} deleteContact={deleteContact} />
      </section>
    </div>
  )
}
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contacts from './contacts.json';
import s from './App.module.css';
import { useState } from 'react';

const App = () => {
  // const [contacts, setContacts] = useState(contactsData);
  const [search, setSearch] = useState('');

  const searchContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={searchContacts} />
    </div>
  );
};

export default App;

import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contacts from './contacts.json';
// import { useState } from 'react';

const App = () => {
  // const [contacts, setContacts] = useState(contactsData);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;

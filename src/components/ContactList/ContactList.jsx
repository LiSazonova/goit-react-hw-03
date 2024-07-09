import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

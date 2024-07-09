import s from './Contact.module.css';

const Contact = ({ data: { name, number } }) => {
  return (
    <div className={s.container}>
      <p>{name}</p>
      <p>{number}</p>

      <button className={s.btn}>Delete</button>
    </div>
  );
};

export default Contact;

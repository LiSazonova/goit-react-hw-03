import s from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={s.form}>
        <Field className={s.field} type="text" name="username" />
        <Field className={s.field} type="email" name="email" />
        <button className={s.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

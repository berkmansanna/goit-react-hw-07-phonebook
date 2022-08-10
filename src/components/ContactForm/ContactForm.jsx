import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handelSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { name, number };

    if (contacts.find(c => c.name === name)) {
      alert('You saved this contact!');
      return;
    }

    createContact(newContact);

    form.reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handelSubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

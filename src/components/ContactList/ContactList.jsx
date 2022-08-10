import { Loader } from 'components/Loader/Loader';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { ContactItem } from './ContactItem/ContactItem';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();

  const filtredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={styles.list}>
      {isFetching && <Loader />}
      {contacts &&
        filtredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contacts={{ id, name, number }} />
        ))}
    </ul>
  );
};

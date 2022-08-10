import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactItem = ({ contacts }) => {
  const { id, name, number } = contacts;
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className={styles.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.btnDelete} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

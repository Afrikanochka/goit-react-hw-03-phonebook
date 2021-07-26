import PropTypes from "prop-types";
import styles from './contactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <p className={styles.info}>
              {name}: {number}
            </p>
            <button
              className={styles.button}
              type="button"
              onClick={() => onDeleteContact(id)}>
                  Delete
              </button>
        
          </li>
        ))}
      </ul>
    );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
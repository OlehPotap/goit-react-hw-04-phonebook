import styles from '../ContactsListItem/contacts-list-item.module.css';

const ContactsList = ({ contacts, filteredData, onClick } = {}) => {
  // const deleteItem = event =>{console.log(event)}

  if (filteredData === '') {
    return contacts.map(el => {
      return (
        <li key={el.id} className={styles.item}>
          <p className={styles.text}>
            {el.name} {el.number}
          </p>
          <button
            onClick={event => {
              onClick(el.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  } else {
    return contacts
      .filter(el => {
        return el.name.toLowerCase().includes(filteredData.toLowerCase());
      })
      .map(el => {
        return (
          <li key={el.id} className={styles.item}>
            <p className={styles.text}>
              {el.name} {el.number}
            </p>
            <button
              onClick={event => {
                onClick(el.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      });
  }
};

export default ContactsList;

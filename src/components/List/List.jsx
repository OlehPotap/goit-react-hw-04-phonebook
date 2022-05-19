import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';

const List = ({ contacts, filteredData, onClick }) => {
  return (
    <ol className="list">
      <ContactsListItem
        contacts={contacts}
        filteredData={filteredData}
        onClick={onClick}
      />
    </ol>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  filteredData: PropTypes.string,
  onClick: PropTypes.func,
};

export default List;

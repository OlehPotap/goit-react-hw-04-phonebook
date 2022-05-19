import React from 'react';
import styles from '../Filter/filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({contacts, filter, onChange}) => {

 const handleChange = event => {
        onChange(event.target.value);
      };

    return (
      <div className={styles.box}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          className={styles.filter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
          onChange={handleChange}
        />
      </div>
    );
}

// class Filter extends React.Component {
//   // Записываем значения введенные в импут в свойства в state:
//   handleChange = event => {
//     this.props.onChange(event.target.value);
//   };

//   render() {
//     return (
//       <div className={styles.box}>
//         <label htmlFor="filter">Find contacts by name</label>
//         <input
//           className={styles.filter}
//           type="text"
//           name="filter"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={this.props.filter}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

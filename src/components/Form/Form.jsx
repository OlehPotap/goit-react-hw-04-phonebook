import React from 'react';
import styles from '../Form/form.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const reset = () => {
   setState({
      name: '',
      number: '',
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(state);

    reset();
  };

  const { name, number } = state;
  return (
    <div className={styles.box}>
      <form
        className={styles.form}
        action="submit"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="number">Number</label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};


Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;

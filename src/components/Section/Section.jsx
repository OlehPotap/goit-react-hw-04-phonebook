import React from 'react';
import styles from '../Section/section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Section;

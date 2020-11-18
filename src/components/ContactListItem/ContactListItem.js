import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

function ContactListItem({ name, number, deleteContact }) {
  return (
    <li className={styles.item}>
      <span className={styles.info}>
      {name} : {number}
      </span>
       <button className={styles.button} onClick={deleteContact}>Delete</button>
    </li>
  );
}
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}
export default ContactListItem;

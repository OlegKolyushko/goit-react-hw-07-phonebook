import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactOperations from "../../redux/contact/contactOperations";
import contactSelectors from '../../redux/contact/contactSelectors';

function ContactList({ contacts, deleteContact }) {
  return (
    <TransitionGroup component="ul">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
          <ContactListItem
            name={name}
            number={number}
            deleteContact={() => deleteContact(id)}
          ></ContactListItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
   contacts: contactSelectors.getFilteredContact(state),
});


const mapDispatchToProps = {
  deleteContact: contactOperations.deleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import {connect} from 'react-redux';
import contactOperations from '../../redux/contact/contactOperations';

 class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object),
  }
  state = {
    name: '',
    number: '',
  };

  handlerForm = (e) => {
    e.preventDefault();
    const {name, number} = this.state;
    const {contacts} = this.props;
    const contactInList = contacts.find(contact => contact.name === name);
    if(contactInList) {
      this.props.alert();
      return;
    }
    this.props.onAddContact(name, number);
    this.setState({name: ''});
    this.setState({number: ''});
  };
  handlerName = (e) => {
    this.setState({ name: e.target.value });
  };
  handlerNumber = (e) => {
      this.setState({ number: e.target.value });
  }

  render() {
      const {name, number} = this.state
    return (
      <form onSubmit={this.handlerForm}>
        <label className={styles.name}>Name
        <input className={styles.inputName} type="text" value={name} onChange={this.handlerName} placeholder='Enter your name'></input>
        </label>
        <label className={styles.number}>Number
        <input className={styles.inputNumber} type="tel"  value={number} onChange={this.handlerNumber} pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='123-12-12' ></input>
        </label>       
        <button className={styles.button} type="submit">Add contact</button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact: contactOperations.addContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
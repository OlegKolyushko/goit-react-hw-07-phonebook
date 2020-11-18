import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import {CSSTransition} from 'react-transition-group';
import styles from './App.module.css';
import Alert from '../Alert/Alert';
import alertStyles from '../Alert/Alert.module.css';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import contactOperations from '../../redux/contact/contactOperations';
import contactSelectors from '../../redux/contact/contactSelectors';


 class App extends Component {
  state = {
    inList: false,
  }

  componentDidMount() {
    this.props.onFetchContact();
  }

  handlerAlert = () => {
    this.setState({inList: true});
      setTimeout(() => {
        this.setState({inList: false});
      }, 2500);
  }

  render() {
      const { inList } = this.state;
      const {contacts, loading} = this.props;
    return (
      <>
      <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
         <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>
      <CSSTransition in={inList} timeout={250} classNames={alertStyles} unmountOnExit>
        <Alert  />
      </CSSTransition>
      {loading && <Loader/>}
      <section className={styles.container}>
       <ContactForm alert={this.handlerAlert} ></ContactForm>
       </section>
       {contacts.length > 0 && (
           <>
           <br></br>
           <Filter/>
           <ContactList/>
           </>
       )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  loading: contactSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContact: contactOperations.fetchContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
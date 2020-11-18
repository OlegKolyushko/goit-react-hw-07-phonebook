import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');


const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');


const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');


const filterContact = createAction('contact/filterContact');

export default { 
  filterContact,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError
};

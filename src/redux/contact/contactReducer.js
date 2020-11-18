import { combineReducers } from "redux";
import contactActions from "../contact/contactActions";
import { createReducer } from "@reduxjs/toolkit";

const addContact = (state, action) => {
  return [...state, action.payload];
};

const deleteContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactActions.fetchContactSuccess]: (_, action) => action.payload,
  [contactActions.addContactSuccess]: addContact,
  [contactActions.deleteContactSuccess]: deleteContact,
});

const filter = createReducer("", {
  [contactActions.filterContact]: (_, action) => action.payload,
});
const loading = createReducer(false, {
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.fetchContactRequest]: () => true,
  [contactActions.fetchContactSuccess]: () => false,
  [contactActions.fetchContactError]: () => false,
  [contactActions.deleteContactRequest]: () => true,
  [contactActions.deleteContactSuccess]: () => false,
  [contactActions.deleteContactError]: () => false,
})

export default combineReducers({
  items,
  filter,
  loading,
});

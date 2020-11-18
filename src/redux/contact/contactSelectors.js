import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getContact = (state) => state.contacts.items;

const getFilteredContact = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// const getFilteredContact = (state) => {
//   const filter = getFilter(state).toLowerCase();
//   const items = getContact(state);

//   return items.filter((item) => item.name.toLowerCase().includes(filter));
// };

export default {
  getLoading,
  getFilter,
  getFilteredContact,
};

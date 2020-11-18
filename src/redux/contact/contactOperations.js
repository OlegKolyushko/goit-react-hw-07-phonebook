import axios from "axios";
import contactActions from "./contactActions";

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => (dispatch) => {
  dispatch(contactActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({data}) =>
      dispatch(contactActions.addContactSuccess(data))
    )
    .catch((error) => dispatch(contactActions.addContactError(error)));
};

const fetchContact = () => (dispatch) => {
  dispatch(contactActions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactActions.fetchContactSuccess(data)))
    .catch((error) => dispatch(contactActions.fetchContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactActions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactActions.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactActions.deleteContactError(error)));
};

export default {
  addContact,
  fetchContact,
  deleteContact,
};

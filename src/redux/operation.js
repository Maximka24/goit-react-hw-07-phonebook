import actions from "./actions";
import * as fetchApi from "../fetchApi/fetchApi";

export const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await fetchApi.fetchListContacts();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

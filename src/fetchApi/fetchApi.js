import axios from "axios";
import shortid from "shortid";

export async function fetchListContacts() {
  const { data } = await axios.get("http://localhost:3000/contacts");

  return data;
}

export async function fetchAddContacts(name, number) {
  return await axios.post("http://localhost:3000/contacts", {
    id: shortid.generate(),
    name,
    number,
  });
}

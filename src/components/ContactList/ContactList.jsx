import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"

const Contactlist = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number}) => (
        <li className={s.contact} key={id}>
          <Contact id={id} name={name} number={number}/>
        </li>
      ))}
    </ul>
  );
};

export default Contactlist;
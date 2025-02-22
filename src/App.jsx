import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList  from "./components/ContactList/ContactList"
import s from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.isError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      {contacts.length > 0 && <SearchBox />}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
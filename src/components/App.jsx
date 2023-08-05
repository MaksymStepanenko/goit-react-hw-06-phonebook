import {FormContact} from './FormContact/FormContact'
import {ListContacts} from './ListContacts/ListContacts'
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.appwrap}>
      <h1 className={css.phohebookTitle}> Phonebook</h1>
      <FormContact />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
};

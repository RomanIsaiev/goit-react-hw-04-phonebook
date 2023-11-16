import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { nanoid } from 'nanoid';

import { ContactsList } from './ContactsList/ContactsList';

import { Filter } from './Filter/Filter';

import { Layout } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

const storageKey = 'contacts';

const initialContacts = {
  name: '',
  number: '',
  id: '',
};

const getContacts = () => {
  const savedContacts = window.localStorage.getItem(storageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [contactsFilter, setcontactsFilter] = useState('');

  const addContanct = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };
    if (
      contacts.find(
        item =>
          item.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const updateContactsFilter = newContanct => {
    setcontactsFilter(newContanct);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(item => item.id !== contactId);
    });
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(item => {
    const hasContact = item.name
      .toLowerCase()
      .includes(contactsFilter.toLowerCase());
    return hasContact;
  });

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContanct} />
      <h2>Contacts</h2>
      <Filter filter={contactsFilter} onUpdateName={updateContactsFilter} />
      {contacts.length > 0 && (
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      )}
      <GlobalStyle />
    </Layout>
  );
};

import { useEffect, useMemo, useState } from 'react';
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
  const [filter, setFilter] = useState('');

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
    setFilter(newContanct);
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

  const visibleContacts = useMemo(() => {
    if (contacts.length === 0) {
      return [];
    }

    return contacts.filter(item => {
      const hasContact = item.name.toLowerCase().includes(filter.toLowerCase());
      return hasContact;
    });
  }, [contacts, filter]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContanct} />
      <h2>Contacts</h2>
      <Filter filter={filter} onUpdateName={updateContactsFilter} />
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

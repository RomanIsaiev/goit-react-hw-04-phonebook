import { Component, useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { nanoid } from 'nanoid';

import { ContactsList } from './ContactsList/ContactsList';

import { Filter } from './Filter/Filter';

import { Layout } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
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
      prevContacts.filter(item => item.id !== contactId);
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
    const hasContact = item.name.toLowerCase().includes(filter.toLowerCase());
    return hasContact;
  });

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

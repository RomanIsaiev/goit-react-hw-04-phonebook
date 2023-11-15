import { Contact } from 'components/Contact/Contact';
import { ListWithContacts } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListWithContacts>
      {contacts.map(contact => (
        <Contact
          data={contact}
          key={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ListWithContacts>
  );
};

import {
  ContactItem,
  ContactItemContainer,
  DeleteButton,
} from './Contact.styled';

export const Contact = ({ data: { name, number, id }, onDeleteContact }) => {
  return (
    <ContactItem key={id}>
      <ContactItemContainer>
        {name}: {number}
      </ContactItemContainer>
      <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
    </ContactItem>
  );
};

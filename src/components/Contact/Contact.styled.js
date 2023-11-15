import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px solid black;

  padding: 10px 20px;

  border-radius: 10px;
`;

export const ContactItemContainer = styled.div`
  width: 220px;
`;

export const DeleteButton = styled.button`
  max-width: 208px;

  color: #fff;

  border-radius: 10px;

  padding: 5px 10px;
  border: none;
  background-color: crimson;

  transform: scale(1);
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;

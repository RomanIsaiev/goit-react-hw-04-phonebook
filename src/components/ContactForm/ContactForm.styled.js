import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Field = styled(FormikField)`
  max-width: 200px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const SubmitButton = styled.button`
  max-width: 208px;

  color: #fff;

  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: DeepSkyBlue;

  transform: scale(1);
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  margin: 0;
  text-align: center;
  margin-bottom: 10px;
`;

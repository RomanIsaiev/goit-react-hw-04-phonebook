import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  FormGroup,
  Field,
  SubmitButton,
  ErrorMessage,
} from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'The name is very short!').required('Required'),
  number: Yup.string()
    .min(7, 'The number must be 7 digits')
    .required('Required'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </FormGroup>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};

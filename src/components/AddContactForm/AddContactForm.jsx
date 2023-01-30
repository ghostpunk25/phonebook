import { Box } from 'components/Box/Box';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsApi/contacts-operations/contacts-operations';
import { getContact } from 'redux/contactsApi/contacts-selectors/contacts-selectors';
import { Btn, Label, Input } from './AddContactForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const AddContactForm = () => {
   const dispatch = useDispatch()
   const contacts = useSelector(getContact)

   const formik = useFormik({
      initialValues: {
         name: '',
         number: '',
      },
      onSubmit: values => {
         if (contacts.find(contact => contact.name === values.name)) {
            return Notify.info('Контакт вже існує');
         };

         dispatch(addContact(values))
         formik.resetForm()
      },
   });
   return (
      <Box mb='6' as='form' display='flex' flexDirection='column' onSubmit={formik.handleSubmit}>
         <Label htmlFor="name">Контакт</Label>
         <Input
            id='name'
            name="name"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
         />
         <Label htmlFor="number">Номер</Label>
         <Input
            id='number'
            name="number"
            type="number"
            required
            onChange={formik.handleChange}
            value={formik.values.number}
         />
         <Btn type="submit">Додати контакт</Btn>
      </Box>
   );
};
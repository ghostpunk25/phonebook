import { Box } from 'components/Box/Box';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux/es/exports';
import authOperations from 'redux/auth/auth-operations/auth-operations';
import { H1, Label, Btn, Input } from './RegistrationForm.styled';

const RegistrationForm = () => {
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         password: '',
      },
      onSubmit: values => {
         dispatch(authOperations.register(values))
      },
   });
   return (
      <Box px='6'>
         <H1>Зареєструватись</H1>
         <Box as='form' display='flex' flexDirection='column' onSubmit={formik.handleSubmit}>
            <Label htmlFor="name">Ваше ім'я</Label>
            <Input
               id='name'
               name="name"
               type="text"
               required
               onChange={formik.handleChange}
               value={formik.values.name}
            />
            <Label htmlFor="email">Email</Label>
            <Input
               id='email'
               name="email"
               type="text"
               required
               onChange={formik.handleChange}
               value={formik.values.email}
            />
            <Label htmlFor="password">Пароль</Label>
            <Input
               id='password'
               name="password"
               type="password"
               required
               onChange={formik.handleChange}
               value={formik.values.password}
            />
            <Btn type="submit">Зареєструватись</Btn>
         </Box>
      </Box>
   );
};

export default RegistrationForm;
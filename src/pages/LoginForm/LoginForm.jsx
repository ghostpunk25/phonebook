import { Box } from 'components/Box/Box';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux/es/exports';
import authOperations from 'redux/auth/auth-operations/auth-operations';
import { Btn, H1, Label, Input } from './LoginForm.styled';

const LoginForm = () => {
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      onSubmit: values => {
         dispatch(authOperations.logIn(values));
      },
   });
   return (
      <Box px='6'>
         <H1>Увійти в додаток</H1>
         <Box as='form' display='flex' flexDirection='column' onSubmit={formik.handleSubmit}>
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
            <Btn type="submit">Увійти</Btn>
         </Box>
      </Box>
   );
};

export default LoginForm;
import { Box } from 'components/Box/Box';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import authOperations from 'redux/auth/auth-operations/auth-operations';
import authSelectors from 'redux/auth/auth-selectors/auth-selectors';
import { Btn } from './UserMenu.styled';


export const UserMenu = () => {
   const name = useSelector(authSelectors.getUserName)
   const dispatch = useDispatch()


   return (
      <Box display='flex' flexDirection="column" gridGap='5'>
         <p>Вітаю, {name}</p>
         <Btn type='button' onClick={() => dispatch(authOperations.logOut())}>Вихід</Btn>
      </Box>
   )
}
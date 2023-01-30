import { AuthNav } from "./AuthNav"
import { UserMenu } from "./UserMenu"
import { useSelector } from "react-redux/es/exports";
import authSelectors from "redux/auth/auth-selectors/auth-selectors";
import { Box } from "components/Box/Box";

export const AppBar = () => {
   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

   return (
      <Box as='header' mb='7' py='6' px='4' display='flex' justifyContent='flex-end' background='#20232a' color='#61dafb' fontSize='4' fontWeight='bold'>
         {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
   );
};
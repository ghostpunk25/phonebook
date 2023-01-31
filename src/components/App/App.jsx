import { Layout } from "components/Layout/Layout";
// import { LoginForm } from "pages/LoginForm/LoginForm";
// import { RegistrationForm } from "pages/RegistrationForm/RegistrationForm";
// import { PhonebookInfo } from "pages/PhonebookInfo/PhonebookInfo";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import authOperations from "redux/auth/auth-operations/auth-operations";
import authSelectors from "redux/auth/auth-selectors/auth-selectors";
import { Box } from "components/Box/Box";
import { lazy } from "react";

const LoginForm = lazy(() => import("pages/LoginForm/LoginForm"));
const RegistrationForm = lazy(() => import("pages/RegistrationForm/RegistrationForm"));
const PhonebookInfo = lazy(() => import("pages/PhonebookInfo/PhonebookInfo"));

export const App = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser())
  }, [dispatch]);

  return (
    <Box display='flex' justifyContent='center' height='100vh' background='#282c34' >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isLoggedIn ? <Navigate to='/home' replace={true} /> : <LoginForm />} />
          <Route path="registration" element={isLoggedIn ? <Navigate to='/home' replace={true} /> : <RegistrationForm />} />
          <Route path="home" element={isLoggedIn ? <PhonebookInfo /> : <Navigate to='/' replace={true} />} />

          <Route path="*" element={<LoginForm />} />
        </Route>
      </Routes>
    </Box >
  );
};

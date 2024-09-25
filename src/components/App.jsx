import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import {Toaster} from 'react-hot-toast';
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/registrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/contactsPage/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const  isRefreshing  = useSelector(selectIsRefreshing);
    useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
   
    <b>Refreshing user...</b>
  ) : ( 
    <Layout>
      <Toaster
      position="bottom-center"
      reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};


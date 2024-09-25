import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
//import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
//import Loader from '../components/loader/Loader';
import {Toaster} from 'react-hot-toast';
const CatalogDetailsPage = lazy(() => import("../pages/catalogDetailsPage/CatalogDetailsPage"));
const CatalogPage = lazy(() =>
  import("../pages/catalogPage/CatalogPage")
);
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

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
          path="/catalog"
          element={
            <RestrictedRoute
              redirectTo="/catalog"
              component={<CatalogPage />}
            />
          }
        />
        <Route
          path="/catalog/:id"
          element={
            <RestrictedRoute redirectTo="/catalog" component={<CatalogDetailsPage />} />
          }
        />
        
         <Route path="*" element={<NotFoundPage />} />
           
      </Routes>
    </Layout>
  );
};


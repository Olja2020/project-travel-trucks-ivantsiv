 import {  lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
 import { Route, Routes } from "react-router-dom";
 import { Layout } from "./Layout";
//import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { refreshUser } from "../redux/auth/operations";
// import { selectIsRefreshing } from "../redux/auth/selectors";
//import Loader from '../components/loader/Loader';
// import {Toaster} from 'react-hot-toast';

const CatalogDetailsPage = lazy(() => import("../pages/catalogDetailsPage/CatalogDetailsPage"));
const CatalogPage = lazy(() => import("../pages/catalogPage/CatalogPage"));
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));


 export const App = () => {

//   return isRefreshing ? (
   
//     <b>Refreshing user...</b>
//   ) : ( 
//     <Layout>
//       <Toaster
//       position="bottom-center"
//       reverseOrder={false}/>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/catalog"
//           element={
//             <RestrictedRoute
//               redirectTo="/catalog"
//               component={<CatalogPage />}
//             />
//           }
//         />
//         <Route
//           path="/catalog/:id"
//           element={
//             <RestrictedRoute redirectTo="/catalog" component={<CatalogDetailsPage />} />
//           }
//         />
        
//          <Route path="*" element={<NotFoundPage />} />
           
//       </Routes>
//     </Layout>
//   );
return (
  <div className={css.container}>
   
     
      
      <Layout>
      

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={< CatalogPage/>} />
      <Route path="/catalog/:id" element={<CatalogDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
     </Layout>
  </div>
);
 };

// import { Routes, Route, NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Products from '../pages/Products';
// import ProductDetails from '../pages/ProductDetails';
// import NotFound from '../pages/NotFound';
 import css from './App.css';

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// export const App = () => {
//   return (
//     <div className={css.container}>
//       <header className={css.header}>
//         <p className={css.logo}>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           GoMerch Store
//         </p>

//         <nav className={css.nav}>
//           <NavLink to="/" className={buildLinkClass}>
//             Home
//           </NavLink>
//           <NavLink to="/about" className={buildLinkClass}>
//             About
//           </NavLink>
//           <NavLink to="/products" className={buildLinkClass}>
//             Products
//           </NavLink>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

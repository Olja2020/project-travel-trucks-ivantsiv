
// const CamperFilterList=()=>{

// }
// export default CamperFilterList;

// import { 
//     //useEffect, 
//     useState } from 'react';
// import { useSelector } from 'react-redux';
// import Camper from '../Camper/Camper';
// import css from './CamperFilterList.module.css';
// import {
//   selectError,
//   selectIsLoading,
  
// } from '../../redux/campers/selectors';
// import { InfinitySpin } from 'react-loader-spinner';
// import {
 
//   selectCampersFilter
// } from '../../redux/filters/selectors';


// const CamperFilterList = () => {

// //   const [sortType, setSortType]= useStare(0);
// //   const [sortName, setSortName]=useState(0);
// //   useEffect (()=> {
// //     fetch("")
// //     .then((res)=> res.json())
// //     .then((arr)=>{
      
// //     })
// //   })
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const campersFilter = useSelector(selectCampersFilter);

//   // Локальное состояние для отслеживания количества отображаемых элементов
//   const [visibleCampers, setVisibleCampers] = useState(4); // Начальное количество элементов

//   // Обработчик для кнопки "Load More"
//   const handleLoadMore = () => {
//     setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4); // Увеличиваем на 5 элементов
//   };

//   return (
//     <div>
//       {isLoading && !error && (
//         <ClipLoader
//           visible={true}
//           width="200"
//           color="#FFC531"
//           ariaLabel="infinity-spin-loading"
//         />
//       )}

//       <ul className={css.camperList}>
//         {campersFilter.slice(0, visibleCampers).map((camper) => (
//           <li key={camper.id} className={css.camperItem}>
//             <Camper camper={camper} />
//           </li>
//         ))}
//       </ul>

//       {/* Если есть ещё элементы для отображения, показываем кнопку "Load More" */}
//       {visibleCampers < campersFilter.length && (
//         <button onClick={handleLoadMore} className={css.loadMoreBtn}>
//           Load More
//         </button>
//       )}

//       {error && <p className={css.error}>Error loading campers: {error}</p>}
//     </div>
//   );
// };

// export default CamperFilterList;

//import { selectFilters } from '../../redux/filters/slice';

import { useSelector, useDispatch } from 'react-redux';
     import { Suspense, useEffect, } from 'react'; 
     import Camper from '../Camper/Camper'; // Оголошення Camper як lazy
     import css from './CamperFilterList.module.css';
     import { selectError, selectIsLoading } from '../../redux/campers/selectors';
     //import { ClipLoader } from 'react-spinners';
     //import { selectCampersFilter } from '../../redux/filters/selectors';
     import { fetchCampers } from '../../redux/campers/slice'; 
     //import 
     //React,
      //{ createContext, useContext, useState } from 'react';

     //import axios from 'axios';
      const CamperFilterList = () => {
      
       const dispatch = useDispatch();
       //const campers = useSelector(selectCampers);
       const isLoading = useSelector(selectIsLoading);
       const error = useSelector(selectError);
       //const filteredCampers = useSelector(selectCampersFilter); 

//+=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//console.log(selectFilters)
       //const filters = useSelector(selectFilters);

       //console.log( '111', filters); // Виведе значення state.filters в консоль
     
    //    useEffect(() => {
    //      dispatch(fetchCampers());
    //    }, [dispatch]);

    //    if (isLoading) {
    //      return (
    //        <div className={css.loaderContainer}>
    //          <СlipLoader />
    //        </div>
    //      );
    //    }

    //    if (error) {
    //      return <div>Error: {error}</div>;
    //    }

    //    return (
    //      <ul className={css.list}>
    //        <Suspense fallback={<div>Loading campers...</div>}>
    //          {campers.map((camper) => (
    //            <Camper key={camper.id} camper={camper} />
    //          ))}
    //        </Suspense>
    //      </ul>
    //    );
      };

     export default CamperFilterList;
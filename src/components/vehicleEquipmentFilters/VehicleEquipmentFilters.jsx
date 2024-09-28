
import { useDispatch, useSelector } from 'react-redux';
//import { setFilter } from '../redux/reducers/filtersReducer';
import css from './VehicleEquipment.module.css';
//import { useState } from 'react';


// const initialState = {
//   campers: [],
//   filters: {
//     location: '',
//     type: '',
//     ac: false,
//     kitchen: false,
//     // ... інші фільтри
//   },
//   favorites: [],
// };

// const campersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_CAMPERS_SUCCESS':
//       return { ...state, campers: action.payload };
//     case 'SET_FILTERS':
//       return { ...state, filters: action.payload };
//     case 'ADD_TO_FAVORITES':
//       return { ...state, favorites: [...state.favorites, action.payload] };
//     case 'REMOVE_FROM_FAVORITES':
//       return {
//         ...state,
//         favorites: state.favorites.filter(
//           (camper) => camper.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

//export default campersReducer;

export const fetchCampers = () => async (dispatch) => {
  try {
    const response = await fetch('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
    const data = await response.json();
    dispatch({ type: 'FETCH_CAMPERS_SUCCESS', payload: data.items });
  } catch (error) {
    console.error('Error fetching campers:', error);
  }
};

// Set filters
export const setFilters = (filters) => (dispatch) => {
  dispatch({ type: 'SET_FILTERS', payload: filters });
};

// Add to favorites
export const addToFavorites = (camper) => (dispatch) => {
  dispatch({ type: 'ADD_TO_FAVORITES', payload: camper });
};

// Remove from favorites
export const removeFromFavorites = (id) => (dispatch) => {
  dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });
};


const VehicleEquipmentFilters = () => {
  
 // const [selectedType, setSelectedType] = useState([]); // Зберігає обраний тип
  //const [selectedFilters, setSelectedFilters] = useState([]);
   
  
  
  const dispatch = useDispatch();
  const amenitiesFilter = useSelector((state) => state.filters.amenities);

  const handleAmenitiesChange = (event) => {
    const value = event.target.value;
    dispatch(setFilters({
      filterType: 'amenities',
      filterValue: event.target.checked 
        ? [...amenitiesFilter, value] 
        : amenitiesFilter.filter((item) => item !== value) 
    }));
  };
  
  return ( 
    <div>
      <div className={css.filters}>Filters</div>
      <h3 className={css.filtersName}>Vehicle equipment</h3>
      <div className={css.filterContainer}>

        <div className={css.filterItem }>
          
          <input 
            className={css.filterItems}
            type="checkbox" 
            id="ac" 
            value="AC" 
            // checked={amenitiesFilter.includes('AC')} 
            onChange={handleAmenitiesChange} 
          />
          <label htmlFor="ac"><svg 
            className={css.mediaIcon} 
            width="32" 
            height="32" 
            aria-label="icon"
          >
            <use href="../../../public/symbol-defs.svg#icon-Vector-1"></use>
          </svg>AC</label>
          
        </div>

        <div className={css.filterItem}>
          
          <input 
            className={css.filterItems}
            type="checkbox" 
            id="Automatic" 
            value="Automatic" 
            // checked={amenitiesFilter.includes('Automatic')} 
            onChange={handleAmenitiesChange} 
          />
          <label htmlFor="Automatic"><svg 
            className={css.mediaIcon} 
            width="32" 
            height="32" 
            aria-label="icon"
          >
            <use href="../../../public/symbol-defs.svg#icon-diagram"></use>
          </svg>Automatic</label>
          
        </div>

        <div className={css.filterItem}>
          
          <input 
            className={css.filterItems}
            type="checkbox" 
            id="kitchen" 
            value="Kitchen" 
            // checked={amenitiesFilter.includes('Kitchen')} 
            onChange={handleAmenitiesChange} 
          />
          <label htmlFor="kitchen"><svg 
            className={css.mediaIcon} 
            width="32" 
            height="32"
            aria-label="icon"
          >  <use href="../../../public/symbol-defs.svg#icon-Group"></use>
          </svg>Kitchen</label>
          
        </div>

        <div className={css.filterItem}>
          
          <input 
            className={css.filterItems}
            type="checkbox" 
            id="TV" 
            value="TV" 
            // checked={amenitiesFilter.includes('TV')} 
            onChange={handleAmenitiesChange} 
          />
          <label htmlFor="TV"><svg 
            className={css.mediaIcon} 
            width="32" 
            height="32" 
            aria-label="icon"
          >
            <use href="../../../public/symbol-defs.svg#icon-tv"></use>
          </svg>TV</label>
          
        </div>

        <div className={css.filterItem}>
          
          <input 
            className={css.filterItems}
            type="checkbox" 
            id="Bathroom" 
            value="Bathroom" 
            // checked={amenitiesFilter.includes('Bathroom')} 
            onChange={handleAmenitiesChange} 
          />
          <label htmlFor="Bathroom"><svg 
            className={css.mediaIcon} 
            width="32" 
            height="32" 
            aria-label="icon"
          >
            <use href="../../../public/symbol-defs.svg#icon-bi_droplet"></use>
          </svg>Bathroom</label>
          
        </div>

        
      </div>


      <h3>Vehicle type</h3>

      <div className={css.filterContainer}>
         <div className={css.filterItem}> 
        
        <input 
          className={css.filterItems} 
          type="radio" 
          name="vehicleType"
          id="Van" 
          value="Van"
          // checked={selectedType === 'Van'} 
          
          onChange={handleAmenitiesChange} 
        />
        <label htmlFor="Van">  <svg 
          className={css.mediaIcon} 
          width="32" 
          height="32" 
          aria-label="icon"
        >
          <use href="../../../public/symbol-defs.svg#icon-bi_grid-1x2"></use>
        </svg>Van</label>
       
      </div>

        
        
        <div className={css.filterItem}>
          
          <input 
            className={css.filterItems}
            type="radio" 
            name="vehicleType"
            id="Fully Integrated" 
            value="Fully Integrated" 
            // checked={selectedType === 'Fully Integrated'}
             
            onChange={handleAmenitiesChange} 
          />
          <label htmlFor="Fully Integrated"><svg 
            className={css.mediaIcon} 
            width="32" 
            height="32" 
            aria-label="icon"
          >
            <use href="../../../public/symbol-defs.svg#icon-bi_grid"></use>
          </svg>Fully Integrated</label>
          
        </div>

        <div className={css.filterItem}>
          
          <input 
            className={css.filterItems }
            type="radio" 
            name="vehicleType"
            id="Alcove" 
            value="Alcove" 
            // checked={selectedType === 'Alcove'}
            
            onChange={handleAmenitiesChange} 
          />
          <label htmlFor="Alcove"><svg 
            className={css.mediaIcon} 
            width="32" 
            height="32" 
            aria-label="icon"
          >
            <use href="../../../public/symbol-defs.svg#icon-bi_grid-3x3-gap"></use>
          </svg>Alcove</label>
          
        </div>
        <button type="submit" className={css.filtersBtn}>Search</button>
        </div>
     
    </div>
  );
};

export default VehicleEquipmentFilters;


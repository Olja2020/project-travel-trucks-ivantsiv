import LocationTravelTrucks from "../../components/locationTravelTrucks/LocationTravelTrucks.jsx";
import VehicleEquipmentFilters from "../../components/vehicleEquipmentFilters/VehicleEquipmentFilters.jsx";
import VehicleType from "../../components/vehicleType/VehicleType.jsx";
import DescriptionTravelTrucks from "../../components/descriptionTravelTrucks/DescriptionTravelTrucks.jsx";
//import ListItems from "../../components/listItems/ListItems.jsx";
import styles from "./CatalogPage.module.css";
//import CamperList from "../../components/camperList/CamperList.jsx";
const CatalogPage = () => {
  return (
    <div className={styles.CatalogPage}>
      <div className={styles.CatalogPageContainer}>
        <div className={styles.CatalogPageContainerBlock}>
          <LocationTravelTrucks />
          <VehicleEquipmentFilters />
          <VehicleType />
          <DescriptionTravelTrucks />
           {/* <CamperList />  */}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;

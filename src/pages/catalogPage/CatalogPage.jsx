import LocationTravelTrucks from "../../components/locationTravelTrucks/LocationTravelTrucks.jsx";
import VehicleEquipment from "../../components/vehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../../components/vehicleType/VehicleType.jsx";
import DescriptionTravelTrucks from "../../components/descriptionTravelTrucks/DescriptionTravelTrucks.jsx";
//import ListItems from "../../components/listItems/ListItems.jsx";
import styles from "./CatalogPage.module.css";
const CatalogPage = () => {
  return (
    <div className={styles.CatalogPage}>
      <div className={styles.CatalogPageContainer}>
        <div className={styles.CatalogPageContainerBlock}>
          <LocationTravelTrucks />
          <VehicleEquipment />
          <VehicleType />
          <DescriptionTravelTrucks />
          {/* <ListItems /> */}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;

//import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
//import { TextField, Typography } from "@mui/material";
// export default function SearchBox() {
//   const dispatch = useDispatch();

//   const filter = useSelector(selectNameFilter);

//   const handleFilter = (e) => {
//     const name = e.target.value.trim();
//     dispatch(changeFilter(name));
//   };
//   return (
//     <div>
//       <Typography variant="subtitle1">Location</Typography>
//       <TextField
//         fullWidth
//         value={filter}
//         onChange={handleFilter}
//         placeholder="Search..."
//         variant="outlined"
//         sx={{
//           backgroundColor: "#F7F7F7",
//           fontFamily: "Inter",
//           fontSize: "16px",
//           paddingLeft: "64px",
//           webkitAppearance: "none",
//           fontWeight: 400,
//           lineHeight: "24px",
//           boxShadow: "none",
//           textAlign: "left",
//           width: "360px",
//           height: "56px",
//           outline: "none",
//           borderRadius: "12px",
//           color: "#10182899",
//         }}
//       />
//     </div>
//   );
// }
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(changeFilter(name));
  };

  return (
    <div>
      <h2 className="subtitle1">Location</h2>
      <input
        type="text"
        className="searchInput"
        value={filter}
        onChange={handleFilter}
        placeholder="Search..."
      />
    </div>
  );
}

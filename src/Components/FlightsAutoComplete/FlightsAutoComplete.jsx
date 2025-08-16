import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import flightsData from "../FlightsAutoComplete/flightsData/flightsData";

export default function FlightsAutoComplete(props) {
  console.log(props, "props");
  const [search, setSearch] = React.useState("");

  console.log("search", search);
  return (
    <div style={{ marginTop: "20px", marginLeft: "20px" }}>
      <Autocomplete
        disablePortal
        options={flightsData}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={props.to} />}
      />
    </div>
  );
}

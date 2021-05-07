import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../styles.css";

const Searchbox = ({ searchCity, Search, city, fetchCity }) => {
  return (
    <div className="search-box">
      {/* < LocationOnIcon /> */}
      <Input
        startAdornment={
          <InputAdornment className="icon" position="start">
            <LocationOnIcon />
          </InputAdornment>
        }
        className="search-bar"
        type="search"
        placeholder="City"
        value={city}
        onChange={searchCity}

        // id="input-with-icon-adornment"
      />

      <button className="button" value={fetchCity} onClick={Search}>
        <span role="img" aria-label="search">
          {" "}
          🔎︎{" "}
        </span>
      </button>
    </div>
  );
};

export default Searchbox;

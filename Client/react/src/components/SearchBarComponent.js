import { useState } from "react";
import React from 'react';
var data = require("../data.json");

// import SearchIcon from "@material-ui/icons/Search";


function SearchBarComponent({placeholder}) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <div className='search'>
        <div className="searchInput">
            <span onClick={() => onSearch(value)}><i className="fa fa-search searchIcon" /></span>
            <input type="text" value={value} onChange={onChange} placeholder= {placeholder}/>
            {/* <div className="searchIcon"><span className="fa fa-search"></span></div> */}
            <div className="dropdown">
              {data
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.full_name.toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.full_name)}
                    className="dropdown-row"
                    key={item.full_name}
                  >
                    
                    {item.full_name}
                  </div>
                ))}
            </div>

        </div>
        <div className="dataResult">

        </div>

    </div>
  )
}

export default SearchBarComponent
import React from 'react'
// import SearchIcon from "@material-ui/icons/Search";


function SearchBarComponent({placeholder, data}) {
  return (
    <div className='search'>
        <div className="searchInput">
            <input type="text" placeholder= {placeholder}/>
            <div className="searchIcon"><span className="fa fa-search"></span></div>
        </div>
        <div className="dataResult">

        </div>

    </div>
  )
}

export default SearchBarComponent
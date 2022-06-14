import React, { useState } from 'react';
import "./navbar.css";
import 'reactjs-popup/dist/index.css';
import SearchBody from '../components/Search-body';

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  
  const filteredSites = details.filter(
    site => {
      return (
        site
        .name_en
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        site
        .states_name_en
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return (
    <SearchBody handleChange={handleChange} filteredSites={filteredSites} />
  );
}

export default Search
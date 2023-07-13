import React from "react"
import "./Search.css"

const Search = ({ value, onChange, handleSearchButton, placeHolder }) => {

  return (
    <div className="search">
      <div className="search__input">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
        <button className="btn search__button" type="submit" onClick={handleSearchButton}>
          <i className="bi bi-search search__icon"></i>
          جستجو
        </button>
      </div>
    </div>
  )
}

export default Search

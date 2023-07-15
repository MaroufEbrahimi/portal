import React from "react"
import "./Search.css"

const Search = ({ value, onChange, handleSearchButton, placeHolder }) => {
  return (
    <div className="search">
      <div className="search__input display_flex align_items_center border_radius_8">
        <input value={value} onChange={onChange} placeholder={placeHolder} />
        <button
          className="btn search__button background_color_transparent cursor_pointer outline_none text_color border_none"
          type="submit"
          onClick={handleSearchButton}
        >
          <i className="bi bi-search search__icon"></i>
          جستجو
        </button>
      </div>
    </div>
  )
}

export default Search

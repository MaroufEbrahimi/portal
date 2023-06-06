import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Search.css"

const Search = () => {
  const [inputSearch, setInputSearch] = useState("")
  const navigate = useNavigate()

  const search = (e) => {
    e.preventDefault()
    console.log("click button >>", inputSearch)
    navigate("/")
  }
  return (
    <form className="search">
      <div className="search__input">
        <div className="">
          <i className="bi bi-search search__icon"></i>
        </div>
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
      <div className="search__button">
        <button type="submit" onClick={search}>
          جستجو
        </button>
      </div>
    </form>
  )
}

export default Search

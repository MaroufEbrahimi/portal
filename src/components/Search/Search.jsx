import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Search.css"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer"

const Search = ({ hiddenButton = false }) => {
  const [{}, dispatch] = useStateValue()
  const [inputSearch, setInputSearch] = useState("")
  const navigate = useNavigate()

  const search = (e) => {
    e.preventDefault()
    console.log("click button >>", inputSearch)
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: inputSearch,
    })
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
      {!hiddenButton ? (
        <div className="search__button">
          <button type="submit" onClick={search}>
            جستجو
          </button>
        </div>
      ) : (
        <div className="search__button">
          <button
            type="submit"
            onClick={search}
            className="search__buttonHidden"
          >
            جستجو
          </button>
        </div>
      )}
    </form>
  )
}

export default Search

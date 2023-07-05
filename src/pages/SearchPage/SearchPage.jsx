import React, { useState } from "react"
import "./SearchPage.css"
import Search from "../../components/Search/Search"
import { useStateValue } from "../../context/StateProvider"

const SearchPage = () => {
  return (
    <div className="search">
      <Search />
    </div>
  )
}

export default SearchPage

import React from "react"
import { Route, Routes } from "react-router-dom"

import "./App.css"

import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import Students from "./pages/Students/Students"

const App = () => {
  return (
    <div className="app">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

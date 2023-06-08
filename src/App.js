import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css"
import Loading from "./components/UI/Loading/Loading"
import Wrapper from "./components/HOC/Wrapper"

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"))
const Students = React.lazy(() => import("./pages/Students/Students"))
const AddStudent = React.lazy(() => import("./pages/AddStudent/AddStudent"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))
const Login = React.lazy(() => import("./pages/Login/Login"))
const BackToTop = React.lazy(() => import("./components/BackToTop/BackToTop"))

const App = () => {
  return (
    <div className="app">
      <main>
        <Router>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addstudent" element={<AddStudent />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/students" element={<Students />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Wrapper>
            <BackToTop />
          </Suspense>
        </Router>
      </main>
    </div>
  )
}

export default App

import React, { Suspense, useContext } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AuthContext } from "./context/authContext"

import "./App.css"
import Loading from "./components/UI/Loading/Loading"
import Wrapper from "./components/HOC/Wrapper"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"))
const Students = React.lazy(() => import("./pages/Students/Students"))
const AddStudent = React.lazy(() => import("./pages/AddStudent/AddStudent"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))
const Login = React.lazy(() => import("./pages/Login/Login"))
const BackToTop = React.lazy(() =>
  import("./components/UI/BackToTop/BackToTop")
)
const NewPost = React.lazy(() => import("./pages/NewPost/NewPost"))
const DeleteStudent = React.lazy(() =>
  import("./pages/DeleteStudent/DeleteStudent")
)
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"))

const App = (props) => {
  const authContext = useContext(AuthContext)

  return (
    <div className="app">
      <main>
        <Router>
          <Suspense fallback={<Loading />}>
            <Header />
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                {authContext.isAuth ? (
                  <>
                    <Route path="/admin/addstudent" element={<AddStudent />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/admin/newpost" element={<NewPost />} />
                    <Route
                      path="/admin/deletestudent"
                      element={<DeleteStudent />}
                    />
                  </>
                ) : null}
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Wrapper>
            <BackToTop />
            <Footer />
          </Suspense>
        </Router>
      </main>
    </div>
  )
}

export default App

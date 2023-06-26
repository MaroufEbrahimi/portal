import React, { Suspense, useContext, useState } from "react"
import { AuthContext } from "./context/authContext"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom"

import "./App.css"

import Loading from "./components/UI/Loading/Loading"
import Wrapper from "./components/HOC/Wrapper"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import BackToTop from "./components/UI/BackToTop/BackToTop"

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"))
const Students = React.lazy(() => import("./pages/Students/Students"))
const AddStudent = React.lazy(() => import("./pages/AddStudent/AddStudent"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))
const Login = React.lazy(() => import("./pages/Login/Login"))
const NewPost = React.lazy(() => import("./pages/NewPost/NewPost"))
const DeleteStudent = React.lazy(() =>
  import("./pages/DeleteStudent/DeleteStudent")
)
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"))

const App = (props) => {
  const authContext = useContext(AuthContext)
  const [activeNav, setActiveNav] = useState(false)
  const navActiveHandler = () => setActiveNav(!activeNav)

  const Layout = () => {
    return (
      <div className="app">
        <main className={`main ${activeNav && "main_active_nav"}`}>
          <Suspense fallback={<Loading />}>
            <Header />
            <Navbar activeNav={activeNav} navActiveHandler={navActiveHandler} />
            <Wrapper>
              <Outlet />
            </Wrapper>
            <Footer />
            <BackToTop />
          </Suspense>
        </main>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/admin/addstudent",
          element: <AddStudent />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/admin/newpost",
          element: <NewPost />,
        },
        {
          path: "/admin/deletestudent",
          element: <DeleteStudent />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

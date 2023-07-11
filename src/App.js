import React, { Suspense, useState } from "react"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom"

import "./App.css"

import Loading from "./components/UI/Loading/Loading"
import Wrapper from "./components/HOC/Wrapper"
import Header from "./components/Header/Header"
import BackToTop from "./components/UI/BackToTop/BackToTop"

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const Posts = React.lazy(() => import("./pages/Posts/Posts"))
const Students = React.lazy(() => import("./pages/Students/Students"))
const AddStudent = React.lazy(() => import("./pages/AddStudent/AddStudent"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))
const Login = React.lazy(() => import("./pages/Login/Login"))
const NewPost = React.lazy(() => import("./pages/NewPost/NewPost"))
const DeleteStudent = React.lazy(() =>
  import("./pages/DeleteStudent/DeleteStudent")
)
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"))
const PostManagement = React.lazy(() =>
  import("./pages/PostManagement/PostManagement")
)
const ResetPassword = React.lazy(() => import("./pages/Login/ResetPassword"))
const ComputerScience = React.lazy(() =>
  import("./pages/Faculties/ComputerScience/ComputerScience")
)
const Low = React.lazy(() => import("./pages/Faculties/Low/Low"))
const Dentistry = React.lazy(() =>
  import("./pages/Faculties/Dentistry/Dentistry")
)

const App = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") == null
      ? false
      : localStorage.getItem("isDark") == "true"
      ? true
      : false
  )
  const [activeNav, setActiveNav] = useState(false)
  // handle tab header
  const navActiveHandler = () => setActiveNav(!activeNav)
  const darkModeHandler = () => {
    console.log(isDark)
    localStorage.setItem("isDark", !isDark)
    setIsDark(!isDark)
  }

  const Layout = () => {
    return (
      <Suspense fallback={<Loading />}>
        <div className={`app ${isDark ? "theme-dark" : "theme-light"}`}>
          <main className={`main ${activeNav && "main_active_nav"}`}>
            <div className="app_header">
              <Header isDark={isDark} darkModeHandler={darkModeHandler} />
            </div>
            <Navbar activeNav={activeNav} navActiveHandler={navActiveHandler} />
            <Wrapper>
              <Outlet />
            </Wrapper>
            <BackToTop />
          </main>
        </div>
      </Suspense>
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
          path: "/cs",
          element: <ComputerScience />,
        },
        {
          path: "/dentistry",
          element: <Dentistry />,
        },
        {
          path: "/low",
          element: <Low />,
        },
        {
          path: "/admin/addstudent",
          element: <AddStudent />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/profile/:id",
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
        {
          path: "/admin/postmanagement",
          element: <PostManagement />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

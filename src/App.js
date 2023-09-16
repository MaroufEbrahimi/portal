import React, { Suspense, useState } from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import "./App.css"

import Wrapper from "./components/HOC/Wrapper"
import Header from "./components/Header/Header"
import About from "./pages/About/About"
import UpdatePost from "./components/UpdatePost/UpdatePost"
import ButtonLoading from "./components/UI/Loading/ButtonLoading"
import Faculties from "./pages/Faculties/Faculties"

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const Posts = React.lazy(() => import("./pages/Posts/Posts"))
const Students = React.lazy(() => import("./pages/Students/Students"))
const AddStudent = React.lazy(() => import("./pages/AddStudent/AddStudent"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))
const Login = React.lazy(() => import("./pages/Login/Login"))
const NewPost = React.lazy(() => import("./pages/NewPost/NewPost"))
const UpdateStudentPage = React.lazy(() =>
  import("./pages/UpdateStudentPage/UpdateStudentPage")
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
const Teachers = React.lazy(() => import("./pages/Teachers/Teachers"))
const Timetable = React.lazy(() => import("./pages/Timetable/Timetable"))
const AttendanceSheet = React.lazy(() =>
  import("./pages/AttendanceSheet/AttendanceSheet")
)
const TeacherProfile = React.lazy(() =>
  import("./pages/TeacherProfile/TeacherProfile")
)

const App = () => {
  // switch between light or dark mode
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") == null
      ? false
      : localStorage.getItem("isDark") == "true"
        ? true
        : false
  )
  // handle tab header
  const [activeNav, setActiveNav] = useState(false)
  const navActiveHandler = () => setActiveNav(!activeNav)

  const darkModeHandler = () => {
    localStorage.setItem("isDark", !isDark)
    setIsDark(!isDark)
  }

  // added layout for every components and pages
  const Layout = () => {
    return (
      <Suspense fallback={<ButtonLoading />}>
        <div className={`app ${isDark ? "theme-dark" : "theme-light"}`}>
          <span className="background_colors"></span>
          <main className={`main ${activeNav && "main_active_nav"}`}>
            <div className="app_header">
              <Header isDark={isDark} darkModeHandler={darkModeHandler} />
            </div>
            <Navbar activeNav={activeNav} navActiveHandler={navActiveHandler} />
            <Wrapper>
              <Outlet />
            </Wrapper>
          </main>
        </div>
      </Suspense>
    )
  }

  // every link for pages
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
          path: "faculties/:id",
          element: <Faculties />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/admin/add-student",
          element: <AddStudent />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/admin/post-management/edit/:id",
          element: <UpdatePost />,
        },
        {
          path: "/admin/students",
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
          path: "/admin/update-student/:id",
          element: <UpdateStudentPage />,
        },
        {
          path: "/admin/post-management",
          element: <PostManagement />,
        },
        {
          path: "/admin/teachers",
          element: <Teachers />,
        },
        {
          path: "/profile-teacher/:id",
          element: <TeacherProfile />,
        },
        {
          path: "/admin/timetable",
          element: <Timetable />,
        },
        {
          path: "/admin/attendance-sheet",
          element: <AttendanceSheet />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/reset-password/:id",
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

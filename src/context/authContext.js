import React, { useState } from "react"

export const AuthContext = React.createContext({
  isAuth: true,
  login: () => {},
})

const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(true)
  // useState(JSON.parse(localStorage.getItem("user")) || null)

  const loginHandler = () => {
    setIsLogin(true)
  }

  return (
    <AuthContext.Provider value={{ isAuth: isLogin, login: loginHandler }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

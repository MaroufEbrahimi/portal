import React, { useState } from "react"

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
})

const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false)

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

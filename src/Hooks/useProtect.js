import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useStateValue } from "../context/StateProvider"
import Roles from "../constants/Roles"

const useProtect = ({ roles, id }) => {
  const [{ authentication }, dispatch] = useStateValue()
  const navigate = useNavigate()
  useEffect(() => {
    if (!authentication.isAuthenticated) {
      navigate("/login")
      return
    }
    if (
      authentication.isAuthenticated &&
      !authentication.roles.some((item) => roles.includes(item))
    ) {
      navigate("/")
      return
    }
    if (
      authentication.roles.includes(Roles.STUDENT) &&
      id &&
      id != authentication?.userId
    ) {
      navigate("/")
      return
    }
  }, [])
}

export default useProtect

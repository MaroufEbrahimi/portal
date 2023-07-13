import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

function useProtect(role) {
    const [{ authentication }, dispatch] = useStateValue()
    const navigate = useNavigate();
    useEffect(() => {
        if (!authentication.isAuthenticated) {
            navigate("/login")
            return;
        }
        if (authentication.isAuthenticated && !authentication.roles.includes(role)) {
            navigate("/")
            return
        }
    }, [])
}

export default useProtect;
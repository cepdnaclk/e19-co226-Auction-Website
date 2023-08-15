import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth  from "./hooks/UseAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = UseAuth();
    const location = useLocation();
    console.log(auth, allowedRoles);
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        (user && user.roles == allowedRoles)
            ? <Outlet />
            : user?.userName
                ? <Navigate to="/login" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
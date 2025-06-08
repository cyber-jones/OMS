import { useSelector } from "react-redux";

export const useAuth = (roles) => {
    const { authUser } = useSelector(state => state.authUser);

    if (!authUser?.roles) return false;
    const isAuth = authUser.roles.map(role => roles.includes(role)).find(value => value === true);

    return isAuth;
}
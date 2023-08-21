import useAuth from "@/hooks/use-auth";
import Loading from "@/components/loading";

type ProtectRouteProps = {
    children: React.ReactNode;
};

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {
    const isLoggedIn = useAuth();

    return isLoggedIn ? children : <Loading />;
};

export default ProtectRoute;

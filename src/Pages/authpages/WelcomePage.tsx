import { FC, memo } from "react";
import { Link } from "react-router-dom";
import PopularCategories from "../../Components/SearchComponents/PopularCategories";
import HomePage from "./HomePage";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <div>
            <div>
                this is welcome page
            </div>
            <Link to="/login"><span className=" text-blue-500"><button>Login</button></span> </Link>
            <Link to="/signup"><span className=" text-blue-500"><button>Signup</button></span> </Link>

            <HomePage></HomePage>
        </div>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);
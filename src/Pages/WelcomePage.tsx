import { FC, memo } from "react";
import { Link } from "react-router-dom";
import PopularCategories from "../Components/SearchComponents/PopularCategories";
import HomePage from "./HomePage";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <>

            <PopularCategories ></PopularCategories>
            <div>This is Welcome Page</div>
            <Link to={"/navbar"}>Navbar</Link>
            <Link to="/login"><span className=" text-blue-500"><button>Login</button></span> </Link>
            <Link to="/signup"><span className=" text-blue-500"><button>Signup</button></span> </Link>
            {/* <Link to="/UserReview1"><span className=" text-blue-500"><button>UserReview1</button></span> </Link> */}
            <HomePage></HomePage>
            
        </>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);
import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const HomePage: FC<Props> = (props) => {
    return (
        <>
            <div>This is Home Page</div>
            <Link to="/"><span className=" text-blue-500"><button>Logout</button></span> </Link>
            <br></br>
            <Link to="/search"><span className=" text-blue-600 border-2 border-gray-600"><button>Search here</button></span> </Link>
            <br></br>
            <Link to="/searchResult"><span className=" text-blue-600 border-2 border-gray-600"><button>Search result page here</button></span> </Link>
        </>
    );
};
HomePage.defaultProps = {
}
export default memo(HomePage);
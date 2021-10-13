import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <>
            <div>This is Welcome Page</div>
            <Link to="/login"><span className=" text-blue-500"><button>Login</button></span> </Link>
            <Link to="/signup"><span className=" text-blue-500"><button>Signup</button></span> </Link>
            <Link to="/home"><span className=" text-blue-500"><button>Hme</button></span> </Link>

            <Link to="/H"><span className=" text-blue-500"><button>Myhome</button></span> </Link>
            
        </>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);
import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const LoginPage: FC<Props> = (props) => {
    return (
        <>
        <div>
            <div>This is Login Page</div>
            <Link to="/signup"><span className=" text-blue-500"> Signup</span> </Link>
            <Link to="/home"><span className=" text-blue-500"> Home</span> </Link>
            <Link to="/footer"><span className=" text-blue-500"> Footer</span> </Link>
            </div>
        </>



 
 

);
};
LoginPage.defaultProps = {
}
export { };
export default memo(LoginPage);
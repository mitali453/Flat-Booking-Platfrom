import {FC, memo} from "react";
import { Link } from "react-router-dom";
interface Props{
}
const HomePage: FC<Props> = (props) =>{
return (
 <>
 <div>This is Home Page</div>
 <Link to="/signup"><span className=" text-blue-500"> Signup</span> </Link>
 <Link to="/login"><span className=" text-blue-500"> Login</span> </Link>
 </>
);
};
HomePage.defaultProps={
}
export default memo(HomePage);
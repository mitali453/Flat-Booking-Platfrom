import {FC, memo} from "react";
import Poptext from "../SearchComponents/Poptext";
interface Props{
}
const Navbar: FC<Props> = (props) =>{
return (
 <>
 <Poptext title={"Sunshine resortttt"} paragraph={"agffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffg"} button={"view details"}></Poptext>
 
 
 
 
 
 
 
 
 
 
 </>
);
};
Navbar.defaultProps={
}
export {};
export default memo(Navbar);
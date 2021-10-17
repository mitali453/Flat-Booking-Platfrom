import {FC, memo} from "react";
interface Props{
    image:string;
}
const Img: FC<Props> = (props) =>{
return (
 <>
 <div><img  className={"md:h-72  "} src={props.image} alt="" /></div>
 </>
);
};
Img.defaultProps={
}
export{};
export default memo(Img);
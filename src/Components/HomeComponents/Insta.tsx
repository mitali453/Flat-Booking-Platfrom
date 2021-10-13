import {FC, memo} from "react";
import Img from "./Img";
interface Props{
}
const Insta: FC<Props> = (props) =>{
return (
 <>
 <div className="flex flex-wrap md:flex-nowrap" >
    <div className="w-1/5"><Img image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7s0igwAZBQ5VQjNayV_I2sMEA6tX8g35cw&usqp=CAU"}></Img></div>
    <div className="w-1/5"><Img image={"https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFsY29ueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}></Img></div>
    
    <div className="w-1/5"><Img image={"https://thearchitecturedesigns.com/wp-content/uploads/2020/04/home-garden-in-flate-4-1024x783.jpg"}></Img></div>
    
    <div className="w-1/5"><Img image={"https://stylesatlife.com/wp-content/uploads/2018/10/Interior-Designs-For-Hall.jpg.webp"}></Img></div>
    <div className="w-1/5"><Img image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQscnVFmpGlWs5alpIgGDBeVmHqaa6uFA-kw&usqp=CAU"}></Img></div>


     
 </div>
 
 
 </>
);
};
Insta.defaultProps={
}
export default memo(Insta);
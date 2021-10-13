import {FC, memo} from "react";
interface Props{
     
}
const Overview: FC<Props> = (props) =>{
return (
 <>
<div className="">
            <div className="text-4xl font-bold font-serif text-center pt-10 underline lg:flex-row">An Overview</div>


       <div className="flex flex-col justify-between pt-12 lg:p-12  pb-0 w-full h-full lg:flex-row">
    
       <div className="lg:flex-wrap lg:w-1/3 group opacity-100 hover:opacity-80 md:pointer-events-none">
            <img className="lg:p-10 p-2 lg:h-4/5 lg:opacity-100 relative " src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg" alt="loading" />
            <div className="lg:font-serif  lg:pt-2 lg:p-10 lg:text-xl absolute md:relative opacity-0 md:opacity-100 group-hover:opacity-100 text-black transform translate-x-20 md:translate-x-0" >The living room is where we come to think, to slow down the world for a second</div>
            <div className="invisible lg:visible lg:text-yellow-500 lg:text-center lg:mx-auto lg:font-bold"><a href="">Read More</a></div>
            </div>

            <div className="lg:flex-wrap lg:w-1/3">
            <img className="lg:p-10 p-2 lg:h-4/5 lg:opacity-100 relative" src="https://cdn.pixabay.com/photo/2016/10/20/20/52/kitchen-1756631_960_720.jpg" alt="loading" />
            <div className=" invisible lg:visible lg:font-serif  lg:pt-2 lg:p-10 lg:text-xl absolute md:relative">Our fondest memories are made gathered around the table with family and friends</div>
            <div className="invisible lg:visible lg:text-yellow-500 lg:text-center lg:mx-auto lg:font-bold"><a href="">Read More</a></div>
            </div>

            <div className="lg:flex-wrap lg:w-1/3 ">
            <img className="lg:p-10 p-2 lg:h-4/5 lg:opacity-100 relative" src="https://cdn.pixabay.com/photo/2017/10/12/15/59/family-house-2844962_960_720.jpg" alt="loading" />
            <div className="invisible lg:visible lg:font-serif  lg:pt-2 lg:p-10 lg:text-xl absolute md:relative"> If you are angry or troubled , nothing provides the same solace as nurturing the soil</div>
            <div className=" invisible lg:visible lg:text-yellow-500 lg:text-center lg:mx-auto lg:font-bold"><a href="">Read More</a></div>
            </div>

            
       </div>
        </div>
 </>
);
};
Overview.defaultProps={
}
export default memo(Overview);

import { FC, memo } from "react";
import FeatureApart from "./FeatureApart";
import Apart from "../../Images/SearchApart.png";
import Food from "../../Images/SearchFood.png";
import Travel from "../../Images/SearchTravel.png";
import Shop from "../../Images/SearchShop.png";

interface Props {

}
const PopularCategories: FC<Props> = (props) => {
    return (
        <div className="">
            <div className="text-center">
                <div className="text-4xl font-bold py-4 text-black">Popular Categories</div>
                <div className="text-xl py-4 pb-8 text-black">CHECK THEM OUT</div>
            </div>
            <div className="flex">
                <div className="bg-black text-white w-full lg:w-64 ">
                    <div className="flex justify-center w-full border-black border-2 hover:border-black p-4 hover:bg-white hover:text-black ">
                        <div><FeatureApart image={Apart}></FeatureApart></div>
                        <div className="py-5 pl-4">FLAT</div>
                    </div>
                    <div className="flex justify-center border-black border-2 hover:border-black p-4 hover:bg-white hover:text-black">
                        <div><FeatureApart image={Food}></FeatureApart></div>
                        <div className="py-5 pl-4">FOOD</div>
                    </div>
                    <div className="flex justify-center border-black  border-2 hover:border-black p-4 hover:bg-white hover:text-black">
                        <div><FeatureApart image={Shop}></FeatureApart></div>
                        <div className="py-5 pl-4">SHOP</div>
                    </div>
                    <div className="flex justify-center border-black  border-2 hover:border-black p-4 hover:bg-white hover:text-black">
                        <div><FeatureApart image={Travel}></FeatureApart></div>
                        <div className="py-5 pl-4">PARKING</div>
                    </div>
                </div>
                <div className="bg-gray-700 invisible text-white lg:w-full lg:visible">
                    {/* <img src="./src/Images/bg-2.png" alt="" /> */}
                    <img className="h-80 mx-auto mt-10" src="https://thumbs.dreamstime.com/z/collage-food-things-place-world-pictures-objects-landmark-landscape-touristic-153230562.jpg" alt="" />
                </div>
            </div>

<div className="flex flex-col space-y-5  lg:flex-row lg:pt-5  lg:pb-0 lg:space-x-20">
<div className="flex ml-8 lg:ml-32 lg:mt-auto">
<p className="text-gray-500 text-7xl font-semibold">13</p>
<div className="my-auto text-xl">
<div className="ml-3">Lakh</div>
<div className="ml-3">Flats Listed</div>
</div>
</div>

<div className="flex">
<p className="text-gray-500 text-7xl font-semibold ml-8 lg:ml-0">700</p>
<div className="my-auto text-xl">
<div className="ml-3">Million</div>
<div className="ml-3">Shopping Decisions Influenced</div>
</div>
</div>


<div className="text-xl my-auto text-yellow cursor-pointer font-serif ml-8 lg:ml-0 lg:mt-auto">Discover how we can help you</div>

</div>

        </div>

        
    );
};
PopularCategories.defaultProps = {
}
export default memo(PopularCategories);
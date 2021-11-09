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
        <div className="pb-48">
            <div className="text-center">
                <div className="text-4xl font-bold py-4 text-black">Popular Categories</div>
                <div className="text-xl py-4 pb-8 text-black">CHECK THEM OUT</div>
            </div>
            <div className="flex">
                <div className="bg-black text-white w-64">
                    <div className="flex justify-center border-black border-2 hover:border-black p-4 hover:bg-white hover:text-black ">
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
                        <div className="py-5 pl-4">TRAVEL</div>
                    </div>
                </div>
                <div className="bg-gray-700 text-white w-full">
                    ALL THE DETAILS WILL BE HERE .....!!!
                </div>
            </div>
        </div>
    );
};
PopularCategories.defaultProps = {
}
export default memo(PopularCategories);
import { FC, memo } from "react";
import Apart from "../../Images/SearchApart.png"
import Food from "../../Images/SearchFood.png"
import Shop from "../../Images/SearchShop.png"
import Travel from "../../Images/SearchTravel.png"
import FeatureApart from "./FeatureApart";

interface Props {

}
const OurFeauture: FC<Props> = (props) => {
    return (
        <div className="flex justify-around">
            <div>
                <FeatureApart image={Apart} ></FeatureApart>
                <h1 className="p-4">FLAT</h1>
            </div>
            <div>
                <FeatureApart image={Food} ></FeatureApart>
                <h1 className="p-4" >FOOD</h1>
            </div>
            <div>
                <FeatureApart image={Shop} ></FeatureApart>
                <h1 className="p-4">SHOP</h1>
            </div>
            <div>
                <FeatureApart image={Travel} ></FeatureApart>
                <h1 className="p-4">TRAVEL</h1>
            </div>
        </div>
    );
};
OurFeauture.defaultProps = {
}
export default memo(OurFeauture);
import { FC, memo } from "react";
import Footer from "../../Components/HomeComponents/Footer";
import OurFeatures from "../../Components/SearchComponents/OurFeatures";
import PopularCategories from "../../Components/SearchComponents/PopularCategories";
import SearchFlat from "../../Components/SearchComponents/SearchFlat";
interface Props {
}
const SearchPage: FC<Props> = (props) => {
    return (
        <div className="w-screen">
            <div className="text-center">
                <div className="text-xl py-4 text-black">OVER 36,500+ ACTIVE LISTINGS</div>
                <div className="text-4xl font-bold py-4 text-black">Find Nearby Places & Things</div>
            </div>
            <div className="border-2 bg-gray-200 rounded-md border-gray-500">
                <SearchFlat></SearchFlat>
                <OurFeatures></OurFeatures>
            </div>
            <PopularCategories></PopularCategories>
            <div className="pt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};
SearchPage.defaultProps = {
}
export default memo(SearchPage);
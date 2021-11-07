import { FC, memo } from "react";
import SpecialFaciCard from "../../Components/SeaPalaceComponents/SpecialFaciCard";
import ExRoomCard from "../../Components/SeaPalaceComponents/ExRoomCard";
import SeaPalaceHeader from "../../Components/SeaPalaceComponents/SeaPalaceHeader";
import UserReview1 from "../../Components/SearchComponents/UserReview1";
import Footer from "../../Components/HomeComponents/Footer";


interface Props {
}
const SearchResultPage: FC<Props> = (props) => {
    return (
        <div className="w-full">
            <SeaPalaceHeader></SeaPalaceHeader>
            <div className="flex justify-center  pt-10">
                <img src="https://preview.colorlib.com/theme/seapalace/img/home/xbed-icon.png.pagespeed.ic.0rw8ay2Tnv.webp" alt="xyz" />
            </div>
            <div className="text-center text-3xl font-serif sm:text-5xl font-bold pb-8">Explore our rooms</div>
            <div className="sm:mx-14 sm:flex">
                <ExRoomCard></ExRoomCard>
                <ExRoomCard></ExRoomCard>
                <ExRoomCard></ExRoomCard>
            </div>
            <div className="sm:mx-14">
                <SpecialFaciCard></SpecialFaciCard>
            </div>
            <div className="pt-10">
                <Footer></Footer>
            </div>

        </div>
    );
};
SearchResultPage.defaultProps = {
}
export default memo(SearchResultPage);
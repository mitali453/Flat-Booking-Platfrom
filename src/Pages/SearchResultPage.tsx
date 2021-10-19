import { FC, memo } from "react";
import SpecialFaciCard from "../Components/SeaPalaceComponents/SpecialFaciCard";
import ExRoomCard from "../Components/SeaPalaceComponents/ExRoomCard";
import SeaPalaceHeader from "../Components/SeaPalaceComponents/SeaPalaceHeader";
import UserReview1 from "../Components/SearchComponents/UserReview1";


interface Props {
}
const SearchResultPage: FC<Props> = (props) => {
    return (
        <>

            <SeaPalaceHeader></SeaPalaceHeader>
            <div className="md:flex md:mx-24 pt-10 justify-between">
                <ExRoomCard></ExRoomCard>
                <ExRoomCard></ExRoomCard>
                <ExRoomCard></ExRoomCard>
            </div>

            <div className="md:mx-24 pt-10">
                <SpecialFaciCard></SpecialFaciCard>
            </div>


            <div className="md:mx-24 pt-10 pb-20">
                <UserReview1></UserReview1>
            </div>



        </>
    );
};
SearchResultPage.defaultProps = {
}
export default memo(SearchResultPage);
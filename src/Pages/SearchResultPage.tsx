import { FC, memo } from "react";
import Card from "../Components/SeaPalaceComponents/SpecialFaciCard";
import ExRoomCard from "../Components/SeaPalaceComponents/ExRoomCard";
import SeaPalaceHeader from "../Components/SeaPalaceComponents/SeaPalaceHeader";


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
            <Card></Card>

        </>
    );
};
SearchResultPage.defaultProps = {
}
export default memo(SearchResultPage);
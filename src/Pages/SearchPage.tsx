import { FC, memo } from "react";
import OurFeatures from "../Components/SearchComponents/OurFeatures";
import PopularCategories from "../Components/SearchComponents/PopularCategories";
import SearchFlat from "../Components/SearchComponents/SearchFlat";
interface Props {
}
const SearchPage: FC<Props> = (props) => {
    return (
        <>
            <SearchFlat></SearchFlat>
            <OurFeatures></OurFeatures>
            <PopularCategories></PopularCategories>
        </>
    );
};
SearchPage.defaultProps = {
}
export default memo(SearchPage);
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import PopularCategories from "../../Components/SearchComponents/PopularCategories";
import HomePage from "./HomePage";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <div>
           

            <HomePage></HomePage>
        </div>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);
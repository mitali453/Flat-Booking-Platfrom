import { FC, memo } from "react";
interface Props {
}
const DashBoardPage: FC<Props> = (props) => {
    return (
        <div className="mx-auto pt-20">
            this is dashboard page
        </div>
    );
};
DashBoardPage.defaultProps = {
}
export default memo(DashBoardPage);
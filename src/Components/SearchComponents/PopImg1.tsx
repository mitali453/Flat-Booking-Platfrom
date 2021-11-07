import { FC, memo } from "react";
interface Props {
    Popimage1: string;
}
const PopImg1: FC<Props> = (props) => {
    return (
        <>
            <div>
                <img className={""} src={props.Popimage1} alt="" />
            </div>
        </>
    );
};
PopImg1.defaultProps = {
}
export { };
export default memo(PopImg1);
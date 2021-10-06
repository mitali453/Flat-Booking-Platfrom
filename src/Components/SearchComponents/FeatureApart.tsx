import { FC, memo } from "react";

interface Props {
    image: string;
}

const FeautureApart: FC<Props> = (props) => {
    return (
        <div>
            <div className="hover:bg-black transition-all cursor-pointer ease-in-out duration-700 max-w-max  p-4 border-2 border-gray-900 rounded-full">
                <img className="h-8 w-8" src={props.image} alt="" />
            </div>
        </div>
    );
};

FeautureApart.defaultProps = {}

export default memo(FeautureApart);


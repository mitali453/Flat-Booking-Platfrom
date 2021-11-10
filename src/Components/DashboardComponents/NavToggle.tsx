import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
interface Props {
    sideNavToggle: () => void;
}
const NavToggle: FC<Props> = ({ sideNavToggle }) => {
    return (
        <>
            <div className="text-gray-100 bg-gray-600 body-font shadow w-full">
                <div className="flex container mx-auto justify-between p-5">
                    <div className="my-auto border-2 border-white rounded-md">
                        <svg onClick={sideNavToggle} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </div>
                    <a className="flex title-font font-medium mx-auto">
                        <img className="h-14 w-52 absolute md:relative md:visible invisible" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqEZo8cWlBOBDhGuIZaZU8Y9EKOfSOMIHGg&usqp=CAU"
                            alt="logo" />
                        <span className="my-auto pl-3 text-xl">ASHIYANA REAL ESTATE</span>
                    </a>
                    
                </div>
            </div></>
    );
};
NavToggle.defaultProps = {
}
export default memo(NavToggle);
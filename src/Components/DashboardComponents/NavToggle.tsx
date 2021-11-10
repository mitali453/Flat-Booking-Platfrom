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

                

                    <div className="my-auto -ml-5">
                    <div className="my-auto rounded-md cursor-pointer">
                        <svg onClick={sideNavToggle} xmlns="http://www.w3.org/2000/svg" className="flex h-6 w-6 justify-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </div>
                    </div>
                    <a className="flex title-font font-medium mx-auto">
                    <img className="h-14 absolute md:relative md:visible invisible rounded-full" src="data:image/jpeg;base64,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"
                            alt="logo" />

                        <span className="my-auto pl-3 text-xl">AASHIYANA - BOOK YOUR FLAT NOW</span>

                        

                    </a>

                    <div className="flex text-white justify-end my-auto">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto mr-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>

                    <Link to={"/profile"}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto -mr-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>
</Link>
                    </div>

                </div>
            </div></>
    );
};
NavToggle.defaultProps = {
}
export default memo(NavToggle);
import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
    Open: Boolean;
}
const SideNav: FC<Props> = ({ Open }) => {
    return (
        <div className={Open ? "h-screen sticky top-0 visible" : "invisible absolute "}>
            <div className="min-h-screen flex flex-row ">
                <div className="flex flex-col w-56 bg-primary  rounded-r-3xl overflow-hidden">
                    <div className="flex pt-5">
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqEZo8cWlBOBDhGuIZaZU8Y9EKOfSOMIHGg&usqp=CAU" alt="" />
                    </div>
                    <ul className="flex flex-col py-4">
                        <li>
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-black">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                                <Link to="/DashBoard"><span className="font-mono text-xl"><button>Dashboard</button></span> </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-black">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                                <Link to="/search"><span className="font-mono text-xl"><button>Search</button></span> </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-black">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                                <Link to="/searchResult"><span className="font-mono text-xl"><button>Booked</button></span> </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-black">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                                <Link to="/profile"><span className="text-xl font-mono"><button>profile</button></span> </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-black">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                                <Link to="/"><span className="text-xl font-mono"><button>Logout</button></span> </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
SideNav.defaultProps = {
}
export default memo(SideNav);
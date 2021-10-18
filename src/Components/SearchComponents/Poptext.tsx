import { FC, memo } from "react";
interface Props {
    title: string;
    paragraph: string;
    button: string;
}
const Poptext: FC<Props> = (props) => {
    return (
        <>
            <div className="flex  justify-center border border-solid   bg-gray-800 h-screen ">
                <div className="px-6 w-1/2 px-16  py-14 ">
                    <div className="flex space-x-4 pb-6 text-white ">
                        <h1 className="text-xl font-bold font-serif">One Of The Most Trending Stuffs Right Now!</h1>
                    </div>
                    <div className="pb-8">
                        <p className="text-white">Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.</p>
                    </div>
                    <div className="flex justify-center">
                    <button className=" group border-2 border-solid  border-white bg-white px-16 py-2 rounded-md justify-center hover:bg-gray-400 hover:border-gray-400 ">
                        <div className="flex space-x-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 border-2 border-solid border-gray-400 rounded-full text-white  bg-gray-400 " viewBox="0 0 20 20" fill="">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                            </svg>
                            <p className="group-hover:text-white font-serif ">Discover More</p>
                        </div>
                    </button>
                    </div>
                </div>
                <div className=" w-1/2 h-full rounded-lg">
                    <img src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/tabs-image-01.jpg" alt="" />
                </div>
            </div>


        </>
    );
};
Poptext.defaultProps = {
}
export { };
export default memo(Poptext);
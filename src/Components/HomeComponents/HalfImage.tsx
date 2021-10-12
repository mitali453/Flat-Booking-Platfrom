import { FC, memo } from "react";
interface Props {
}
const HalfImage: FC<Props> = (props) => {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-gray-100">

                <div className=" md:w-1/2">
                    <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2017/12/27/14/41/window-3042834__340.jpg" alt="Loading" />
                </div>


                <div className="bg-gray-100 md:w-1/2 px-3 py-6 sm:px-5 sm:py-16 md:px-10 md:py-28 space-x-2 mx-auto">

                    <div className="flex">
                        <div>
                            <p className="text-2xl md:text-2xl font-mono font-semibold">1. Sunshine Fourth Apartment</p>

                        </div>


                    </div>


                    <p className="pt-2 font-medium text-gray-400">by: Sale Agent</p>
                    <div className="pt-4 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 border-2 border-solid rounded-full bg-gray-400 text-white px-1 border-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="items-center pt-1 pl-2">$3600/month with taxes</p>
                    </div>

                    <div className="flex pt-4">
                        <p className="text-gray-400">Details:</p>
                        <p>1640 sq ft</p>
                    </div>


                    <div className="pt-4 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="pl-2">5 Bedrooms</p>
                    </div>

                    <div className="flex pt-4 space-x-56">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <p className="pl-2">3 Bathrooms</p>
                        </div>
                    </div>
                    <div >
                        <button className="border-2 rounded border-solid hover:bg-gray-400 group ">
                            <div className="flex p-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 border-2 border-solid rounded-full bg-gray-400 text-white px-1 border-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                </svg>
                                <p className=" text-gray-400 group-hover:text-white">Contact Now</p>
                            </div>
                        </button>
                    </div>

                </div>
            </div>


        </>
    );
};
HalfImage.defaultProps = {
}
export{};
export default memo(HalfImage);
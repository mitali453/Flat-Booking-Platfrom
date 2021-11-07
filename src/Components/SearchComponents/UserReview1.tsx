import { FC, memo } from "react";
interface Props {
}
const UserReview1: FC<Props> = (props) => {
    return (
        <>

            <div className="flex flex-col md:flex-row space-y-2 lg:space-y-0 lg:space-x-3 lg:pt-2 space-x-3.5 ">

                <div className="flex  relative bg-gray-200 p-5 hover:bg-gray-100 hover:shadow-sm w-full sm:w-1/3">
                    <div>
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK4UCa18Md7KCGOx9DAd_AIjKh-HQfKaxNg&usqp=CAU" alt="" className="rounded-full h-20 w-40 " /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="pl-5 ">
                        <div className="text-gray-700">The buildings are located in a good environment, I can say that infrastructures are upto the mark that the city needs.</div>
                        <h1 className="font-semibold font-serif pt-3 text-xl">Adam Pallin</h1>
                        <h3 className="text-xs text-gray-400 pt-1">CEO & Founder (f3D)</h3>
                    </div>
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute bottom-0  pr-5">
                        <polygon points="-40,95 583,95 583,65" className="text-white fill-current"></polygon>
                    </svg>
                </div>

                <div className="flex bg-gray-200 p-5 w-full relative hover:bg-gray-100 hover:shadow-sm sm:w-1/3">
                    <div>
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq5l6DB_2HlbYcUFrEXGfA1jzXfSWuRtuvw&usqp=CAU" alt="" className="rounded-full h-20 w-40 " /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="pl-5">
                        <div className="text-gray-700"> I was very impressed with the way the ceilings looked. Also, the builidings were completely furnished. Also has gyms and parks.
                        </div>
                        <h1 className="font-semibold font-serif pt-3 text-xl">William Jones</h1>
                        <h3 className="text-xs text-gray-400 pt-1">Businessman</h3>
                    </div>
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute bottom-0  pr-5">
                        <polygon points="-40,95 583,95 583,65" className="text-white fill-current"></polygon>
                    </svg>
                </div>

                <div className="flex bg-gray-200 p-5 relative hover:bg-gray-100 hover:shadow-sm w-full sm:w-1/3">
                    <div>
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMUS6nEhoe8Ox6CVm8SebAxaT-vXWymTehQ&usqp=CAU" alt="" className="rounded-full h-20 w-40 " /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="pl-5">
                        <div className="text-gray-700">Finally found the place of my dreams. The place was efficient enough to come up to all my expectations including pools and gyms.</div>
                        <h1 className="font-semibold font-serif pt-3 text-xl">Robert Mack</h1>
                        <h3 className="text-xs text-gray-400 pt-1">Asst. Manager(XT Bank)</h3>
                    </div>
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute bottom-0  pr-5">
                        <polygon points="-40,95 583,95 583,65" className="text-white fill-current"></polygon>
                    </svg>
                </div>

            </div>

        </>
    );
};
UserReview1.defaultProps = {
}
export default memo(UserReview1);
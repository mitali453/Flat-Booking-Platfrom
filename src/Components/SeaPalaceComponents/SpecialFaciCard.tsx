import { FC, memo } from "react";
interface Props {
}
const SpecialFaciCard: FC<Props> = (props) => {
    return (
        <>
            <div >
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-3 lg:pt-2" >

                    <div className="lg:w-1/3 p-10 bg-gray-200 h-56 lg:h-72 group hover:bg-primary overflow-y-auto md:overflow-visible">
                        <div className="flex pb-5 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <h1 className="pl-5 text-2xl font-medium font-serif">Conference Room</h1>
                        </div>
                        <p className="font-sans text-gray-500 group-hover:text-white">There is so much power in being able to look comfortable in a conference room, and not sure dudes in suits are used to seeing people do that . Why not practice !</p>
                    </div>

                    <div className="lg:w-1/3 p-10 bg-gray-200 h-56 lg:h-72 hover:bg-primary group overflow-y-auto md:overflow-visible">
                        <div className="flex pb-5 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <h1 className="pl-5 text-2xl font-medium font-serif">Swimming Pool</h1>
                        </div>
                        <p className="font-sans text-gray-500 group-hover:text-white">To have faith is to trust yourself to the water. When you swim you don’t grab hold of the water, because if you do you will sink and drown. Instead you relax, and float !</p>
                    </div>

                    <div className="lg:w-1/3 p-10 bg-gray-200 h-56 lg:h-72 hover:bg-primary group overflow-y-auto md:overflow-visible">
                        <div className="flex pb-5 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <h1 className="pl-5 text-2xl font-medium font-serif">Sports Club</h1>
                        </div>
                        <p className="font-sans text-gray-500 group-hover:text-white">Number one is just to gain a passion for running. To love the morning, to love the trail, to love the pace on the track. And if some kid gets really good at it, that’s cool too !</p>
                    </div>
                </div>
            </div>
        </>
    );
};
SpecialFaciCard.defaultProps = {
}
export default memo(SpecialFaciCard);

import {FC, memo} from "react";
interface Props{
}
const Footer: FC<Props> = (props) =>{
return (
 <>
 <div className="text-sm md:text-sm lg:text-lg bg-black h-screen w-screen">

<div className="flex flex-col sm:flex-row overflow-hidden justify-between px-10 pt-5">

    <div className="w-full sm:w-1/4 py-5 px-2 hover:bg-gray-900 md:hover:bg-black">
        <div className="flex justify-between relative ">
        <div className="text-xl md:text-sm lg:text-xl font-serif text-white font-medium md:font-semibold lg:font-bold">Aashiyana </div>
        <div className="visible sm:invisible"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></div>
        </div>
        
        <div className="invisible sm:visible absolute sm:relative text-xs md:text-base font-serif pt-5 text-gray-400">A house is made of bricks and beams. A home is made of hopes and dreams !!</div>
    </div>

    <div className="py-5 px-2 hover:bg-gray-900 md:hover:bg-black">
        <div className="flex justify-between ">
        <div className="text-xl md:text-sm lg:text-xl font-serif relative text-white font-medium md:font-semibold lg:font-bold">Useful Links</div>
        <div className="visible sm:invisible"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></div>
        </div>
        <div className="text-xs md:text-base font-serif pt-5 invisible sm:visible absolute sm:relative">
            <ul className="text-gray-400">
                <li className="pb-1.5 hover:text-white"><a href="">Blog</a></li>
                <li className="pb-1.5 hover:text-white"><a href="">Categories</a></li>
                <li className="pb-1.5 hover:text-white"><a href="">Amenities</a></li>
                <li className="pb-1.5 hover:text-white"><a href="">Gift Card</a></li>
            </ul>
        </div>
    </div>

    <div className="py-5 px-2 hover:bg-gray-900 md:hover:bg-black">
        <div className="flex justify-between">
        <div className="text-xl md:text-sm lg:text-xl font-serif relative text-white font-medium md:font-semibold lg:font-bold">Privacy</div>
        <div className="visible sm:invisible"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></div>
        </div>
        <div className="text-xs md:text-base font-serif pt-5 invisible sm:visible absolute sm:relative">
            <ul className="text-gray-400">
                <li className="pb-1.5 hover:text-white"><a href="">About Us</a></li>
                <li className="pb-1.5 hover:text-white"><a href="">Contact Us</a></li>
                <li className="pb-1.5 hover:text-white"><a href="">Services</a></li>
            </ul>
        </div>
    </div>

    <div className="py-5 px-2 hover:bg-gray-900 md:hover:bg-black">
        <div className=" flex justify-between">
        <div className="text-xl md:text-sm lg:text-xl font-serif text-white font-medium md:font-semibold lg:font-bold relative">Have a Question?</div>
        <div className="visible sm:invisible"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></div>
        </div>
        <div className="text-xs md:text-base font-serif pt-5 invisible sm:visible absolute sm:relative">
            <ul className="text-gray-400">
                <div className="flex pb-2 hover:text-white">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg></a>
                    <li className="pl-2"><a href="">GLA University,Mathura,India</a></li>
                </div>

                <div className="flex pb-2 hover:text-white">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg></a>
                    <li className="pl-2"><a href="">+91 9999999999</a></li>
                </div>

                <div className="flex hover:text-white">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg></a>
                    <li className="pl-2"><a href="">info@gmail.com</a></li>
                </div>

            </ul>
        </div>
    </div>

</div>

<div className="h-60">
{/* division for adding social media icons */}
</div>


<div className="text-sm flex text-gray-400 lg:text-xl justify-center font-serif">
Copyright © 2021 All rights reserved  
</div>

</div>
 
 
 
 
 
 
 
 
 
 
 
 </>
);
};
Footer.defaultProps={
}
export default memo(Footer);
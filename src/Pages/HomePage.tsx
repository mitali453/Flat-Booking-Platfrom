import { FC, memo } from "react";
import RoomCards from "../Components/HomeComponents/RoomCards";
import Img from "../Components/HomeComponents/Img";
import Footer from "../Components/HomeComponents/Footer";
interface Props {

}
const HomePage: FC<Props> = (props) => {
    return (
        <div className="scroll-none">


  


            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col sm:flex-row">
                    <div className="opacity-100 hover:opacity-80 group p-2 pl-0 pr-0">
                        <h1 className=" absolute  transform translate-x-20 translate-y-56 animate-spin opacity-0 group-hover:opacity-100 font-bold text-2xl px-2 py-1 text-white border-2 border-double border-white flex  items-center" >Rooms<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> </h1>
                        <img className=" h-72 w-full" src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    </div>
                    <div className=" opacity-100 hover:opacity-80 group p-2 pr-0">
                        <h1 className=" absolute  transform translate-x-8 translate-y-56 animate-spin opacity-0 group-hover:opacity-100 font-bold text-2xl px-2 py-1 text-white border-2 border-double border-white flex  items-center" >Swimming Pool <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> </h1>
                        <img className="h-72 w-full" src="https://www.thespruce.com/thmb/BRypiZq1HM_T52EgRr4tmVylIfM=/1500x1028/filters:no_upscale():max_bytes(150000):strip_icc()/KeyResidentialFtns-5a9470d218ba010037643a30.jpg" alt="" />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row md:w-1/2 ">
                    <div className="opacity-100 hover:opacity-80 group p-2 pr-0">
                        <h1 className=" absolute  transform translate-x-24 translate-y-56 animate-spin opacity-0 group-hover:opacity-100 font-bold text-2xl px-2 py-1 text-white border-2 border-double border-white flex  items-center" >Gardening <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></h1>
                        <img className="h-72 w-full" src="https://worstroom.com/wp-content/uploads/2019/08/apartment-balcony-garden-around-benches.jpg" alt="" />
                    </div>
                    <div className="opacity-100 hover:opacity-80 group p-2 pr-0">
                        <h1 className=" absolute  transform translate-x-24 translate-y-56 animate-spin opacity-0 group-hover:opacity-100 font-bold text-2xl px-2 py-1 text-white border-2 border-double border-white flex  items-center" >Gym <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> </h1>
                        <img className="h-72 w-full" src="https://sebringdesignbuild.com/wp-content/uploads/2018/01/Extraordinary-Home-Gym-Design-Ideas-20_Sebring-Design-Build.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* 4 images in 1 div */}


            {/* marquee text */}


            <div className="  sm:h-96 pb-5 font-serif ">
                <div className="text-center p-4  pt-14 text-lg text-yellow" >
                    <p>WELCOME TO AASHIYANA</p>
                </div>
                <div className="text-center text-3xl font-serif">
                    <p>A New Vision Of Luxury Apartments and Services</p>
                </div>
                <div className="flex justify-center ">
                    <div className=" font-serif sm:space-x-1 p-5 space-y-1 sm:space-y-0 text-xl sm:text-base  sm:flex-row flex-wrap sm:flex-nowrap flex flex-col  ">


                        <button className="  px-4 py-10 p-1 hover:bg-primary group hover:text-white bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto text-yellow group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
                            </svg>
                            <div className="pt-2 text-lg">Friendly Services</div>
                        </button>
                        <button className=" px-8 py-10 p-1 hover:bg-primary group  hover:text-white bg-black text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto  " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                            </svg>

                            <div className="pt-2 text-lg">Rental Services</div>
                        </button>

                        <button className="px-4 py-10 p-1 hover:bg-primary group  hover:text-white bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto text-yellow group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                            <div className="pt-2 text-lg">Buying Services</div>
                        </button>


                        <button className=" px-8 py-10 p-1 hover:bg-primary group hover:text-white bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto text-yellow group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                            <div className="pt-2 text-lg">Luxury Flats</div>
                        </button>

                        <button className=" hover:text-white px-8 py-10 p-1 group hover:bg-primary  bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto group-hover:text-white text-yellow" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
                            </svg>
                            <div className="pt-2 text-lg">Cozy Rooms</div>
                        </button>

                    </div>
                </div>
            </div>

        
            <div className="h-56 w-full bg-gray-100">
                <h1 className="text-yellow text-sm text-center pt-12">AASHIYANA APARTMENTS</h1>
                <h1 className=" text-3xl font-serif p-6 text-center"> New Arrivals - Master's Apartments</h1>

            </div>


            <div>
                <div className="flex flex-col md:flex-row  pb-2 md:pb-0 ">
                    <div className="md:w-1/4" ><Img image="https://www.interiorzine.com/wp-content/uploads/2017/11/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg" ></Img></div>
                    <div className="md:w-1/4"><RoomCards type={"Studio Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                    <div className="md:w-1/4" ><Img image="https://www.interiorzine.com/wp-content/uploads/2017/11/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg" ></Img></div>
                    <div className="md:w-1/4"><RoomCards type={"Studio Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>



                </div>
                <div className="flex flex-col md:flex-row  pb-2 md:pb-0">

                    <div className=" w-full md:w-1/4"><RoomCards type={"Studio Apartment"} Rs={"Rs.1000.00"}  ></RoomCards></div>
                    <div className="md:w-1/4" ><Img image="https://i.redd.it/slja8x86d5n11.jpg" ></Img></div>
                    <div className="md:w-1/4"><RoomCards type={"Studio Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                    <div className="md:w-1/4"><Img image="https://i2.au.reastatic.net/800x600/da454e31c14de6d77b51d02581c114350aebfe81d8fa57efaecdae7fbddb7d1c/main.jpg" ></Img></div>
                </div>

                <div className=" flex flex-col md:flex-row pb-2 md:pb-0">



                    <div className="md:w-1/4"><Img image="https://media.designcafe.com/wp-content/uploads/2020/09/25151949/master-bedroom-2bhk-interior-ideas.jpg" ></Img></div>
                    <div className="md:w-1/4"><RoomCards type={"Studio Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                    <div className="md:w-1/4" ><Img image="https://www.cbreresidential.com/resources/fileassets/GB-ReapIT-cbrrps-WES210352/7a07bdc9/WES210352_16_Photo_2_large.jpg" ></Img></div>
                    <div className="md:w-1/4"><RoomCards type={"Studio Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                </div>
            </div>

            <div className="h-screen w-screen bg-gray-100">


            </div>

            <div className="p-10">
                <div className=" flex flex-col lg:flex-row">
                    <div className=" flex h-full  lg:w-1/2 ">
                        <div className=" sm:visible w-1/2 p-1 invisible absolute sm:relative">
                            <img className=" h-1/2 w-full p-1 " src="https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg" alt="##" />
                            <img className=" h-1/2 p-1 pb-0" src="https://media-cdn.tripadvisor.com/media/photo-s/05/2c/b6/8c/de-java-hotel.jpg" alt="" />
                        </div>
                        <div className="  h-4/5 p-1 pl-0">
                            <img src="https://www.ihgplc.com/-/media/ihg/images/brands/regent/regent_carousel_1.jpg" alt="" />
                        </div>
                    </div>

                    <div className=" lg:w-1/2 lg:px-14 lg:py-10 px-8 py-6 sm:pb-0 text-center">
                        <h1 className=" text-4xl sm:text-5xl  font-serif pb-4 lg:pb-6"> Welcome to your Aashiyana</h1>
                        <p className=" text-medium sm:text-xl text-gray-600 pb-4 lg:pb-6">“If you want to be a leader in your community, buying your own home is an important step, because it is a well-known fact that, if you don’t own your own space, you are subconsciously telling your peers that your perspectives and judgments are unworthy.”</p>
                        <button className=" border-solid border-4 text-xl font-medium text-white border-gray-600 bg-gray-600 px-3 py-1 sm:px-5 sm:py-2 hover:border-gray-600 hover:bg-white hover:text-black ">Learn More</button>
                    </div>
                </div>
            </div>

           
            <div className="h-56 w-full bg-gray-100">
                <h1 className="text-yellow text-sm text-center pt-12">AASHIYANA APARTMENTS</h1>
                <h1 className=" text-3xl font-serif p-6 text-center"> New Arrivals - Master's Apartments</h1>

            </div>



            <iframe className="h-screen w-screen" src="https://www.youtube.com/embed/mb8s4Hsqzyw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <Footer></Footer>










        </div>

    );
};
HomePage.defaultProps = {
}
export default memo(HomePage);
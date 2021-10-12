import { FC, memo } from "react";
interface Props {
    
}
const SignupPage: FC<Props> = (props) => {
    return (
        <>
        <div>
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
                    <h1 className=" text-4xl sm:text-5xl font-semibold font-serif pb-4 lg:pb-6"> Welcome to our residence</h1>
                    <p className=" text-medium sm:text-xl text-gray-700 pb-4 lg:pb-6">“If you want to be a leader in your community, buying your own home is an important step, because it is a well-known fact that, if you don’t own your own space, you are subconsciously telling your peers that your perspectives and judgments are unworthy.”</p>
                    <button className=" border-solid border-4 text-xl font-medium text-white border-gray-600 bg-gray-600 px-3 py-1 sm:px-5 sm:py-2 hover:border-gray-600 hover:bg-white hover:text-black ">Learn More</button>
                </div>
            </div>
        </div>

            




        </>
    );
};
SignupPage.defaultProps = {
}
export { };
export default memo(SignupPage);
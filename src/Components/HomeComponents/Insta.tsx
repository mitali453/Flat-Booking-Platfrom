import { FC, memo } from "react";
import Img from "./Img";
import { FaInstagram } from "react-icons/fa";
interface Props {
}
const Insta: FC<Props> = (props) => {
   return (
      <>
         <div className="flex flex-col md:flex-row" >
            <div className="w-1/2 md:w-1/5 h-56 opacity-100 hover:opacity-80 group">
               <div className="absolute opacity-0 group-hover:opacity-100 text-black transform translate-x-24 translate-y-32"><FaInstagram ></FaInstagram></div>
               <img className="w-full h-full  group-hover:opacity-60" src="https://stylesatlife.com/wp-content/uploads/2018/10/Interior-Designs-For-Hall.jpg.webp" alt="" />
            </div>

            <div className="w-1/2 md:w-1/5 h-56 opacity-100 hover:opacity-80 group">
               <div className="absolute opacity-0 group-hover:opacity-100 text-black transform translate-x-24 translate-y-32"><FaInstagram ></FaInstagram></div>
               <img className="w-full h-full  group-hover:opacity-60" src="https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFsY29ueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            </div>

            <div className="w-1/2 md:w-1/5 h-56 opacity-100 hover:opacity-80 group">
               <div className="absolute opacity-0 group-hover:opacity-100 text-black transform translate-x-24 translate-y-32"><FaInstagram ></FaInstagram></div>
               <img className="w-full h-full  group-hover:opacity-60" src="https://thearchitecturedesigns.com/wp-content/uploads/2020/04/home-garden-in-flate-4-1024x783.jpg" alt="" />
            </div>

            <div className="w-1/2 md:w-1/5 h-56 opacity-100 hover:opacity-80 group">
               <div className="absolute opacity-0 group-hover:opacity-100 text-black transform translate-x-24 translate-y-32"><FaInstagram ></FaInstagram></div>
               <img className="w-full h-full  group-hover:opacity-60" src="https://st.depositphotos.com/2851435/3984/i/600/depositphotos_39844179-stock-photo-modern-interior-bedroom.jpg" alt="" />
            </div>

            <div className="w-1/2 md:w-1/5 h-56 opacity-100 hover:opacity-80 group">
               <div className="absolute opacity-0 group-hover:opacity-100 text-black transform translate-x-24 translate-y-32"><FaInstagram ></FaInstagram></div>
               <img className="w-full h-full  group-hover:opacity-60" src="https://www.planradar.com/wp-content/uploads/2020/02/iStock-1093042428.jpg.webp" alt="" />
            </div>

         </div>
         


      </>
   );
};
Insta.defaultProps = {
}
export default memo(Insta);
import { FC, memo } from "react";
import SpecialFaciCard from "../../Components/SeaPalaceComponents/SpecialFaciCard";
import ExRoomCard from "../../Components/SeaPalaceComponents/ExRoomCard";
import SeaPalaceHeader from "../../Components/SeaPalaceComponents/SeaPalaceHeader";
import UserReview1 from "../../Components/SearchComponents/UserReview1";
import Footer from "../../Components/HomeComponents/Footer";


interface Props {
}
const SearchResultPage: FC<Props> = (props) => {
    return (
        <div className="w-full">
            <SeaPalaceHeader></SeaPalaceHeader>
            <div className="flex justify-center  pt-10 pb-">
                <img src="https://preview.colorlib.com/theme/seapalace/img/home/xbed-icon.png.pagespeed.ic.0rw8ay2Tnv.webp" alt="xyz" />
            </div>
            <div className="text-center text-3xl font-serif sm:text-5xl font-bold pb-8">Explore Us</div>
            <div className="sm:mx-14 sm:flex">
                
            <div className="lg:w-1/3 px-12 md:px-4 mr-auto ml-auto -mt-78 ">
                <div className="flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="  relative  ">
                        <img className="w-fullalign-middle rounded-t-lg" src="https://images.unsplash.com/photo-1597047084993-bf337e09ede0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="..." />
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute bottom-0">
                            <polygon points="-30,95 583,95 583,65" className="text-white fill-current"></polygon>
                        </svg>
                    </div>
                    <blockquote className="mb-2">
                        <h4 className="text-xl font-bold px-8 pt-8 text-black">
                            Paradigm Ananda
                        </h4>
                        <p className="text-md font-light  px-8 pb-8 mt-2 text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicingea voluptatem, unde! Quasi quo, inventore enim consequuntur doloremque iusto tempore cum a dolores ad exercitationem mollitia ipsam? Illo expl deserunt.
                        </p>
                    </blockquote>
                </div>
            </div>
            <div className="lg:w-1/3 px-12 md:px-4 mr-auto ml-auto -mt-78 ">
                <div className="flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="  relative  ">
                        <img className="w-fullalign-middle rounded-t-lg" src="https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="..." />
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute bottom-0">
                            <polygon points="-30,95 583,95 583,65" className="text-white fill-current"></polygon>
                        </svg>
                    </div>
                    <blockquote className="mb-2">
                        <h4 className="text-xl font-bold px-8 pt-8 text-black">
                            Red Brick IBIS
                        </h4>
                        <p className="text-md font-light  px-8 pb-8 mt-2 text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicingea voluptatem, unde! Quasi quo, inventore enim consequuntur doloremque iusto tempore cum a dolores ad exercitationem mollitia ipsam? Illo expl deserunt.
                        </p>
                    </blockquote>
                </div>
            </div>
            <div className="lg:w-1/3 px-12 md:px-4 mr-auto ml-auto -mt-78 ">
                <div className="flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="  relative  ">
                        <img className="w-fullalign-middle rounded-t-lg" src="https://images.unsplash.com/photo-1561518663-f32e0091b049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="..." />
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute bottom-0">
                            <polygon points="-30,95 583,95 583,65" className="text-white fill-current"></polygon>
                        </svg>
                    </div>
                    <blockquote className="mb-2">
                        <h4 className="text-xl font-bold px-8 pt-8 text-black">
                            Runwal Reserve
                        </h4>
                        <p className="text-md font-light  px-8 pb-8 mt-2 text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicingea voluptatem, unde! Quasi quo, inventore enim consequuntur doloremque iusto tempore cum a dolores ad exercitationem mollitia ipsam? Illo expl deserunt.
                        </p>
                    </blockquote>
                </div>
            </div>

            </div>
            <div className="sm:mx-14">
                <SpecialFaciCard></SpecialFaciCard>
            </div>
            <div className="pt-10">
                <Footer></Footer>
            </div>

        </div>
    );
};
SearchResultPage.defaultProps = {
}
export default memo(SearchResultPage);
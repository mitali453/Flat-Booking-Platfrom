import { FC, memo } from "react";
interface Props {
}
const ExRoomCard: FC<Props> = (props) => {
    return (
        <>
            <div className="lg:w-1/3 px-12 md:px-4 mr-auto ml-auto -mt-78 ">
                <div className="flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="  relative  ">
                        <img className="w-fullalign-middle rounded-t-lg" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="..." />
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute bottom-0">
                            <polygon points="-30,95 583,95 583,65" className="text-white fill-current"></polygon>
                        </svg>
                    </div>
                    <blockquote className="mb-2">
                        <h4 className="text-xl font-bold px-8 pt-8 text-black">
                            CLASSIC BEDROOM
                        </h4>
                        <p className="text-md font-light  px-8 pb-8 mt-2 text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicingea voluptatem, unde! Quasi quo, inventore enim consequuntur doloremque iusto tempore cum a dolores ad exercitationem mollitia ipsam? Illo expl deserunt.
                        </p>
                    </blockquote>
                </div>
            </div>
        </>
    );
};
ExRoomCard.defaultProps = {
}
export default memo(ExRoomCard);
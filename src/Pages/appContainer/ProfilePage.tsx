import { FC, memo } from "react";
interface Props {
}
const ProfilePage: FC<Props> = (props) => {
    return (
        <div className="flex items-center  w-full justify-center">
            <div className="bg-white rounded-lg py-3">
                <div className="photo-wrapper p-20 px-20 md:px-80">
                    <img className="w-24 h-24 sm:w-40 sm:h-40 md:w-72 md:h-72  rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="chauhan" />
                </div>
                <div className="">
                    <h3 className="text-center text-2xl sm:text-3xl text-gray-900 font-medium leading-8">Ayush Chauhan</h3>
                    <div className="text-center text-gray-500 text-sm sm:text-lg pt-2 font-semibold">
                        <p>Customer</p>
                    </div>
                    <table className="mx-auto text-sm sm:text-lg my-8">
                        <tr className="">
                            <td className="px-2 py-4 text-gray-500 font-semibold">Address</td>
                            <td className="px-2 py-4">Bahjoi , Sambhal (UP)</td>
                        </tr>
                        <tr className="">
                            <td className="px-2 py-4 text-gray-500 font-semibold">Phone</td>
                            <td className="px-2 py-4">+91 8923077164</td>
                        </tr>
                        <tr className="">
                            <td className="px-2 py-4 text-gray-500 font-semibold">Email</td>
                            <td className="px-2 py-4">chauhanayush531@gmail.com</td>
                        </tr>
                    </table>

                    <div className="text-center my-3">
                        <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View More</a>
                    </div>

                </div>
            </div>

        </div>
    );
};
ProfilePage.defaultProps = {
}
export default memo(ProfilePage);
import { FC, memo } from "react";
interface Props {
}
const SearchFlat: FC<Props> = (props) => {
  return (
    <div className="pb-10">
      <div className="text-xl text-center py-4 text-black">OVER 36,500+ ACTIVE LISTINGS</div>
      <div className="text-4xl font-bold text-center py-4 text-black">Find Nearby Places & Things</div>
      <div className="flex justify-center pt-8 ">

        <div className="flex relative">
          <select className="border-2 border-gray-500 rounded-md text-black font-semibold h-16 px-20 bg-white hover:border-black focus:outline-none appearance-none">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
          </select>
          <div className="pointer-events-none bg-gray-300 absolute right-0 h-14 w-10">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
          </div>
        </div>



        <div className="flex relative">
          <select className="border-2 border-gray-500 rounded-md text-black font-semibold h-16 px-20 bg-white hover:border-black focus:outline-none appearance-none">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
          </select>
          <div className="pointer-events-none bg-gray-300 absolute right-0 h-14 w-10">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
          </div>
        </div>


        <div className="flex relative">
          <select className="border-2 border-gray-500 rounded-md text-black font-semibold h-16 px-20 bg-white hover:border-black focus:outline-none appearance-none">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
          </select>
          <div className="pointer-events-none bg-gray-300 absolute right-0 h-14 w-10">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
          </div>
        </div>

        <div className="flex p-4 w-72 space-x-4 border-2 border-gray-500 rounded-md text-black font-semibold h-16 px-20 bg-white hover:border-black focus:outline-none appearance-none">
          <input className="bg-white placeholder-gray-400 outline-none" type="text" placeholder="ENTER A LOCATION" />
        </div>

        <button className='relative bg-gray-500 text-white p-4 w-72  font-bold overflow-hidden border-2 border-gray-700 rounded-md hover:bg-black hover:border-white'>
          SEARCH NOW
        </button>
      </div>
    </div>
  );
};
SearchFlat.defaultProps = {
}
export default memo(SearchFlat);
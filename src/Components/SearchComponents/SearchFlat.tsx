import { FC, memo } from "react";
interface Props {
}
const SearchFlat: FC<Props> = (props) => {
  return (
    <div>
      <div className="flex-col p-10">
        <div className="mx-auto relative w-full sm:w-1/2 text-gray-700 ">
          <select className="w-full h-14 pl-6 pr-6 text-base placeholder-gray-600 border-2 border-gray-600 rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
            <option>ALL AREAS</option>
            <option>New Village</option>
            <option>Old Town</option>
            <option>New City</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          </div>
        </div>

        <div className="mx-auto relative w-full sm:w-1/2 text-gray-700 pt-1 pb-1">
          <select className="w-full h-14 pl-6 pr-6 text-base border-gray-600 placeholder-gray-600 border-2 rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
            <option>PRICE RANGE</option>
            <option>RS 1000-2500</option>
            <option>RS 2500-5000</option>
            <option>RS 5000-10000</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          </div>
        </div>

        <div className="mx-auto p-3 w-full sm:w-1/2 space-x-4 border-2 border-gray-600 rounded-md text-black font-semibold h-14 px-6 bg-white hover:border-black focus:outline-none appearance-none">
          <input className="bg-white placeholder-gray-400 outline-none" type="text" placeholder="ENTER A LOCATION" />
        </div>

        <div className="pt-1">
          <button className="mx-auto flex justify-center h-14 bg-gray-500 text-white p-3 w-full sm:w-1/2  font-bold overflow-hidden border-2 border-gray-700 rounded-md hover:bg-black hover:border-white">
            SEARCH NOW
          </button>
        </div>



      </div >

    </div>

  );
};
SearchFlat.defaultProps = {
}
export default memo(SearchFlat);
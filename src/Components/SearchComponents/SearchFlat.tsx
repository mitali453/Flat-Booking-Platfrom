import { FC, memo } from "react";
interface Props {
}
const SearchFlat: FC<Props> = (props) => {
  return (
    <div className="pb-10">
      <div className="text-xl text-center py-4 text-black">OVER 36,500+ ACTIVE LISTINGS</div>
      <div className="text-4xl font-bold text-center py-4 text-black">Find Nearby Places & Things</div>
      <div className="flex justify-center pt-8 ">
        <div className="flex  relative ">
          <svg className="w-2 h-9 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#000000" fill-rule="nonzero" /></svg>
          <select className="border-2 border-gray-500 rounded-md text-black font-semibold h-16 px-20 bg-white hover:border-black focus:outline-none appearance-none">
            <option>ALL AREAS</option>
            <option>Modern City</option>
            <option>City</option>
            <option>Town</option>
            <option>Village</option>
            <option>Outside</option>
          </select>
        </div>

        <div className="flex  relative ">
          <svg className="w-2 h-9 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#000000" fill-rule="nonzero" /></svg>
          <select className="border-gray-500 border-2 rounded-md text-black font-semibold h-16 px-20 bg-white hover:border-black focus:outline-none appearance-none">
            <option>PRICE RANGE</option>
            <option>2000 - 4000</option>
            <option>4000 - 6000</option>
            <option>6000 - 1000</option>
            <option>10000 - 15000</option>
            <option>15000 - 20000</option>
          </select>
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
import ScreenCard from "../../assets/imgCard.png";

export default function ScreenCards() {
  return (
    <div className="max-w-sm overflow-hidden border-4 rounded-lg shadow-lg w-[295px] h-[471px] ">
      <img className="px-4 py-4 w-[266] h-[208]" src={ScreenCard} alt="image" />
      <div className="px-4 py-6 ">
        <div>
          2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley
        </div>
        <hr className="my-4 sm:mx-auto lg:my-8 w-[295px] h-[1px]" />

        <div className="text-[#FA6338]  text-end mb-6  ">
          <span className="mr-3">330</span>
          <span className="px-4 border-2 border-orange-600">-33%</span>
        </div>
        <div className=" rounded-lg bg-[#FC1481] ">
          <button className="w-64 h-12 text-xl ">Add to Card</button>
        </div>
      </div>
    </div>
  );
}

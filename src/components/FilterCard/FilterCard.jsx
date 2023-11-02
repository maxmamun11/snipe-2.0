export default function FilterCard() {
  return (
    <div className="max-w-sm overflow-hidden border-4 rounded-lg shadow-lg w-[171px] h-[592px] ">
      <div className="space-y-[10px] mr-4 py-4">
        <div className="flex justify-center uppercase">filter by:</div>
        <div className="flex justify-center">
          <div className="text-blue">clear All</div>
          <div className="bg-[#FC1481] rounded-[4px] text-center w-[60px] h-[30px]">
            Apply
          </div>
        </div>

        <hr />
        <div>
          <span>budget</span>
          <input type="search " placeholder="search" />
        </div>
        <hr />
        <div>
          <span>size</span>
          <input type="search " placeholder="search" />
        </div>
        <hr />
        <div>
          <span>traffic volume</span>
          <input type="search " placeholder="search" />
        </div>
        <div>
          <span>Industry</span>
        </div>
      </div>
    </div>
  );
}

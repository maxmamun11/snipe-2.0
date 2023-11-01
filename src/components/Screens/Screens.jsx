import ScreenCards from "../ScreenCards/ScreenCards";

export default function Screens() {
  return (
    <div className="py-4 text-white bg-indigo-950">
      <h1 className="px-8 py-8 font-sans text-xl">Home / Screens</h1>
      <div className="px-8 py-4 text-black rounded-lg bg-[#F6F6F6] ml-8 mr-8">
        <h1 className="px-2 py-2 text-xl">Screens</h1>
        <div className="flex gap-6 px-3 pt-4 pb-6 shadow-slate-500 ">
          <span className="px-3 bg-white border cursor-pointer border-x-cyan-50 text-zinc-400">
            New
          </span>
          <span className="px-3 bg-white border cursor-pointer border-x-cyan-50 text-zinc-400">
            50% Screens
          </span>
          <span className="px-3 bg-white border cursor-pointer border-x-cyan-50 text-zinc-400">
            Digital Screens
          </span>
          <span className="px-3 bg-white border cursor-pointer border-x-cyan-50 text-zinc-400">
            Static Screens
          </span>
          <span className="px-3 bg-white border cursor-pointer border-x-cyan-50 text-zinc-400">
            Near Me
          </span>
          <span className="px-3 bg-white border cursor-pointer border-x-cyan-50 text-zinc-400">
            Kuala Lumpur
          </span>
          <span className="px-3 bg-white border cursor-pointer border-x-cyan-50 text-zinc-400">
            Selangor
          </span>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-8 py-10 mt-8 uppercase">
          <h1>Results Found</h1>
          <span> | sorted by: recommended </span>
        </div>
        <div className="flex flex-wrap">
          <ScreenCards />
          <ScreenCards />
          <ScreenCards />
          <ScreenCards />
          <ScreenCards />
          <ScreenCards />
          <ScreenCards />
          <ScreenCards />
          <ScreenCards />
        </div>
      </div>
      <div>Total 40 pages</div>
    </div>
  );
}

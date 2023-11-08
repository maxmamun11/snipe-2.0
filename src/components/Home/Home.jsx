import BlogSectionCard from "../Card/Card";
import hero from "../../assets/hero.png";
// import ScreenCards from "../ScreenCards/ScreenCards";

export const Home = () => {
  return (
    <>
      <div
        className="relative flex justify-center mb-10 bg-indigo-800 bg-center bg-cover "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <video
          className="w-full h-auto "
          src="media.mp4"
          autoPlay
          playsInline
          loop
        />
        {/* className="absolute text-center transform -translate-x-1/2 translate-y-1/2 left-1/2 md:text-3xl md: top-2 */}
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <h1 className="px-6 mb-8 text-2xl font-bold text-center max-auto max-w-7xl lg:px-8 sm:text-center lg:text-4xl text-[#FFFFFF]">
            Unlock the Power of Out-of-Home Advertising: Explore, Connect, and
            Grow Your Brand with Our OOH Marketplace.
          </h1>

          <div className="">
            <button
              className="inline-flex text-white uppercase rounded-lg font-blod h-[56px] py-[15px] px-[116px]"
              style={{ backgroundColor: "#FC1481" }}
            >
              See Our Screens
            </button>
          </div>
          <div className="flex justify-center px-20 py-3 mx-3 my-5 ">
            <img
              src="/downward.svg"
              alt="Downward Icon"
              className="w-[48px] h-[66px] shrink-0 cursor-pointer place-items-center"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-white bg-purple-950 ">
        <h1 className="font-bold py-text-4xl ">
          Reach your Customers thanks to the largest network
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
        </p>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-30 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-3 ">
            <div className="text-center shadow-3xl md:border-r rounded-xl ">
              <h6 className="py-2 text-4xl font-bold text-pink-600 lg:text-5xl xl:text-6xl">
                100%
              </h6>
              <p className="text-sm font-medium tracking-widest text-white lg:text-base">
                Screen
              </p>
            </div>
            <div className="text-center md:border-r rounded-xl">
              <h6 className="text-4xl font-bold text-pink-600 lg:text-5xl xl:text-6xl ">
                24/7
              </h6>
              <p className="text-sm font-medium tracking-widest text-white lg:text-base">
                Viewer per day
              </p>
            </div>
            <div className="text-center rounded-lg ">
              <h6 className="text-4xl font-bold text-pink-600 lg:text-5xl xl:text-6xl ">
                100K
              </h6>
              <p className="text-sm font-medium tracking-widest text-white lg:text-base">
                Campaign per year
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-10 bg-cover "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className="text-3xl font-bold text-center text-white">
          Screen and Network
        </h1>
        <p className="text-xl text-center text-white">
          See the most spectacular locations, screens on the busiest streets and
          intersections, at train stations <br /> or in shopping centres.
          Millions of the people pass our advertisering media every day.
        </p>
      </div>

      <section className="px-10 py-10">
        <div className="flex flex-col mb-10">
          <div className="flex flex-col items-center justify-start gap-12 h-96 bg-indigo-950">
            <div className="flex flex-col items-center self-stretch justify-start gap-4 h-28">
              <div className="self-stretch text-center text-white text-4xl font-extrabold font-['Inter'] leading-10 ">
                Reviews
              </div>
              <div className="w-96 text-center text-white text-xl font-normal font-['Inter'] leading-7">
                Discover our news! The latest special events and social
                campaigns, new screen locations and current news from the life
                of Screen Network
              </div>
              <div className="flex flex-col mx-4 md:flex md:flex-row">
                <BlogSectionCard />
                <BlogSectionCard />
                <BlogSectionCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

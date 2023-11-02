import BlogSectionCard from "../Card/Card";
import hero from "../../assets/hero.png";
import ScreenCards from "../ScreenCards/ScreenCards";

export const Home = () => {
  return (
    <>
      <div
        className="relative flex justify-center mb-10 text-white bg-indigo-800 bg-center bg-cover items min-h-screen-col "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <video
          className="w-full h-auto "
          src="media.mp4"
          autoPlay
          playsInline
          loop
        />
        <div className="absolute text-center transform -translate-x-1/2 translate-y-1/2 left-1/2 md:text-3xl md: top-2">
          <h1 className="px-6 mb-8 font-bold text-center max-auto max-w-7xl lg:px-8 sm:text-center">
            Unlock the Power of Out-of-Home Advertising: Explore, Connect, and
            Grow Your Brand with Our OOH Marketplace.
          </h1>

          <button
            className="px-20 py-3 text-white uppercase rounded-lg font-blod "
            style={{ backgroundColor: "#FC1481" }}
          >
            See Our Screens
          </button>
          <div className="flex justify-center px-20 py-3 mx-3 my-5 ">
            <img
              src="/downward.svg"
              alt="Downward Icon"
              className="w-20 h-20 cursor-pointer place-items-center"
            />
          </div>
        </div>
      </div>

      <section className="">
        <div className="mt-64 text-center text-white bg-purple-950">
          <h1 className="py-8 text-3xl font-bold">
            Reach your Customers thanks to the largest network
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
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
      </section>
      <section>
        <div
          className="py-64 bg-cover "
          style={{ backgroundImage: `url(${hero})` }}
        >
          <h1 className="text-3xl font-bold text-center text-white">
            Screen and Network
          </h1>
          <p className="text-xl text-center text-white">
            See the most spectacular locations, screens on the busiest streets
            and intersections, at train stations or in shopping centres.
            Millions of the people pass our advertisering media every day.
          </p>
          <div className="flex flex-wrap gap-5 px-8 py-4 mt-4">
            <ScreenCards />
            <ScreenCards />
            <ScreenCards />
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
      </section>
      <section className="py-12 mx-4 bg-purple-950">
        <div className="text-center text-white bg-purple-950">
          <h1 className="text-4xl font-bold ">Reviews</h1>
          <p className="py-4 text-xl">
            Discover our news! The latest special events and social campaigns,{" "}
            <br />
            new screen locations and current news from the life of Screen
            Network
          </p>
        </div>

        <div className="flex justify-center gap-10 mx-10 my-10 mt-10 border-4 border-solid 50">
          <BlogSectionCard />
          <BlogSectionCard />
          <BlogSectionCard />
        </div>
      </section>
    </>
  );
};

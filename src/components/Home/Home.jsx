import BlogSectionCard from "../Card/Card";

// const stats = [
//   { id: 1, name: "Screen", value: "100%" },
//   { id: 2, name: "Viewer per day", value: "24/7" },
//   { id: 3, name: "Campaign per year", value: "100k" },
// ];

export const Home = () => {
  return (
    <>
      <div className="relative flex justify-center mb-10 text-white bg-gray-900 items min-h-screen-col">
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
          {/* Button */}
          <button
            className="px-20 py-3 text-white uppercase rounded-lg bg-500 font-blod"
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
          {/* Downward icon below the button */}
          {/* {snipeDownwardIcon} */}
        </div>
      </div>
      <section></section>
      <section>
        <div className="text-center text-white bg-purple-950">
          <h1 className="mt-4 text-3xl">
            Reach your Customers thanks to the largest network
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div
              className="grid grid-cols-2 row-gap-8 md:grid-cols-3 rounded-xl"
              style={{ backgroundImage: "" }}
            >
              <div className="text-center md:border-r">
                <h6 className="text-4xl font-bold text-pink-600 lg:text-5xl xl:text-6xl">
                  100%
                </h6>
                <p className="text-sm font-medium tracking-widest text-white lg:text-base">
                  Screen
                </p>
              </div>
              <div className="text-center md:border-r">
                <h6 className="text-4xl font-bold text-pink-600 lg:text-5xl xl:text-6xl ">
                  24/7
                </h6>
                <p className="text-sm font-medium tracking-widest text-white lg:text-base">
                  Viewer per day
                </p>
              </div>
              <div className="text-center ">
                <h6 className="text-4xl font-bold text-pink-600 lg:text-5xl xl:text-6xl ">
                  100K
                </h6>
                <p className="text-sm font-medium tracking-widest text-white lg:text-base">
                  Campaign per year
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center pt-8 pb-8 bg-white ">
            <div className="flex px-4 py-4 text-3xl text-pink-500 r bg-purple-950 ">
              {" "}
              100%
              <span className="text-xl text-white">
                <br />
                Screen
              </span>
            </div>
            <div className="px-4 py-4 text-3xl text-pink-500 bg-purple-950 shrink-7">
              24/7
              <span className="text-white">
                <br />
                Viewer per day
              </span>
            </div>
            <div className="px-4 py-4 text-3xl text-pink-500 bg-purple-950">
              100K
              <span className="text-white">
                <br />
                Campaign per year
              </span>
            </div>
          </div> */}
        </div>
      </section>
      <section>
        <div className="text-center text-white bg-purple-950">
          <h1 className="text-3xl ">Reviews</h1>
          <p>
            Discover our news! The latest special events and social campaigns,
            new screen locations and current news from the life of Screen
            Network
          </p>
        </div>

        <div className="flex gap-10 mx-10 my-10 mt-10 border-4 border-solid ">
          <BlogSectionCard />
          <BlogSectionCard />
          <BlogSectionCard />
        </div>
      </section>
    </>
  );
};

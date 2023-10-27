import BlogSectionCard from "../Card/Card";

const stats = [
  { id: 1, name: "Screen", value: "100%" },
  { id: 2, name: "Viewer per day", value: "24/7" },
  { id: 3, name: "Campaign per year", value: "100k" },
];

export const Home = () => {
  return (
    <>
      <div
        className="relative flex justify-center mb-10 text-white bg-gray-900 items min-h-screen-col"
        src="public/backgroundimg.png"
      >
        <video
          className="w-full h-auto "
          src="media.mp4"
          autoPlay
          playsInline
          loop
        />
        <div className="absolute text-center transform -translate-x-1/2 translate-y-1/7 top-1/2 left-1/2">
          <h1 className="px-6 mb-8 text-4xl font-bold text-center max-auto max-w-7xl lg:px-8">
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
          <h1 className="text-3xl ">
            Reach your Customers thanks to the largest network
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
          <div className="items-center justify-center py-20 bg-purple-500 border border-solid sm:py-32">
            <div className="px-6 max-auto max-w-7xl lg:px-8">
              <dl className="grid justify-center grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col max-w-xs border-4 border-solid"
                  >
                    <dt>{stat.name}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
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

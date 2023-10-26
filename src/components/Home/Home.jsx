import snipeMedia from "../../../public/media.mp4";
import backgroundImage from "../../assets/backgroundimg.png";
import BlogSectionCard from "../Card/Card";
// import snipeDownwardIcon from "../..assets/downward.svg";

const stats = [
  { id: 1, name: "Screen", value: "100%" },
  { id: 2, name: "Viewer per day", value: "24/7" },
  { id: 3, name: "Campaign per year", value: "100k" },
];

export const Home = () => {
  return (
    <>
      <div
        className="relative flex justify-center text-white bg-gray-900 items -center min-h-screen-col"
        style={{ backgroundImage: { backgroundImage } }}
      >
        <video
          className="w-full h-auto "
          src={snipeMedia}
          autoPlay
          playsInline
          loop
        />
        <div className="absolute text-center transform -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2">
          <h1 className="mb-8 text-4xl font-bold text-center">
            Unlock the Power of Out-of-Home Advertising: Explore, Connect, and
            Grow Your Brand with Our OOH Marketplace.
          </h1>
          {/* Button */}
          <button
            className="px-20 py-3 text-white uppercase rounded-lg bg--500 font-blod"
            style={{ backgroundColor: "#FC1481" }}
          >
            See Our Screens
          </button>
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
          <div className="py-20 bg-purple-500 sm:py-32">
            <div className="px-6 max-auto max-w-7xl lg:px-8">
              <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex-col max-w-xs mx-auto gap-y-4"
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

        <div className="flex gap-10 mx-10 mt-10">
          <BlogSectionCard />
          <BlogSectionCard />
          <BlogSectionCard />
        </div>
      </section>
    </>
  );
};

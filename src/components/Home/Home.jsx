import snipeMedia from "../../../public/media.mp4";
// import snipeDownwardIcon from "../..assets/downward.svg";

export const Home = () => {
  return (
    <>
      <div className="relative flex justify-center text-white bg-gray-900 items -center min-h-screen-col">
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
            className="px-5 py-2 text-white uppercase rounded-full bg--500 font-blod"
            style={{ backgroundColor: "#FC1481" }}
          >
            See Our Screens
          </button>
          {/* Downward icon below the button */}
          {/* {snipeDownwardIcon} */}
        </div>
      </div>
      {/* <header className="fixed-top">
        <div>
          <div>
            <div>
              <ul className="flex justify-center gap-20">
                <li>Sales</li>
                <li>Campaigns</li>
                <li>logo</li>
                <li>Screens</li>
                <li>Networks</li>
                <li>Sales</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </header>
      <section>
        <div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4"
            alt=""
          />
        </div>
      </section> */}
    </>
  );
};

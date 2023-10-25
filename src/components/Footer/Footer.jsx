import snipeLogo from "../../assets/icon.png";

export default function Footer() {
  return (
    <footer className="py-6 text-white bg-gray-900">
      <div className="container flex flex-wrap mx-auto">
      {/* The  */}
        <div className="w-full mb-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <h2 className="mb-2 text-lg font-bold">Contact</h2>
          <p>
            Tractive Sdn Bhd <br /> Mobile: +60192333656 <br /> Email:
            info@snipeads.com{" "}
          </p>

          <h2>Operation Hours</h2>
          <p>Monday - Friday : 8AM - 5PM</p>
          {/* Privacy policy need to link with privacy  */}
          <h1>Privacy Policy</h1>
          <h1>Terms and Conditions</h1>
        </div>

        <div className="w-full mb-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <h1>Address</h1>
          <p>
            A-2-28, jalan PJu 1/43, Aman Suria, 47301 <br /> Petaling Jaya,
            Selangor, Malaysia
          </p>
        </div>
        <div className="w-full mb-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          {/* <h2>Snipeads</h2> */}
          <img
            src={snipeLogo}
            alt="logo"
            className="bottom-0 right-0 object-position:"
          />
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023 {""}
          <a href="https://tractive.com.my/" className="hover:underline">
            {""}
            snipeads
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

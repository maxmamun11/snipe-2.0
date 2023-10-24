import snipeLogo from "../../assets/icon.png";

export default function Footer() {
  return (
    <footer className="bg-gray-700">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto c lg:py-8 md:container">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-3 gap-8 text-white sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Contact
              </h2>
              <p>
                Tractive Sdn Bhd <br /> Mobile: +60192333656 <br /> Email:
                info@snipeads.com{" "}
              </p>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Hours
              </h2>
              <p>Monday - Friday: 8am - 5pm</p>
                <div>
                <p>Monday - Friday: 8am - 5pm</p>
                </div>
              
              
            </div>
            <div className="text-white">
              <h2 className="mb-6 text-sm font-semibold uppercase ">Address</h2>
              <p>
                A-2-28, jalan PJu 1/43, Aman Suria, 47301 <br /> Petaling Jaya,
                Selangor, Malaysia
              </p>
            </div>
            <div className="">
              <img src={snipeLogo} className="mr-1 h-1/2" alt="logo" />
            </div>
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
      </div>
    </footer>
  );
}

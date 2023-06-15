"use client";

const Footer = () => {
  return (
    <footer className="px-8 md:px-32">
      <div className="p-4 container grid grid-cols-1 row-auto md:grid-cols-4 px-5 py-24 gap-4">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <img
            className="w-auto h-auto lg:h-16 xl:h-24"
            src="/assets/img/logo/footer-logo.png"
            alt="Logo"
          />
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <p className=" text-gray-900 lg:text-sm xl:text-md">
              Best Real Estate Deals
            </p>
            <span className="flex items-center md:items-start justify-center md:justify-start">
              <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col items-center text-center md:text-start justify-center md:items-start md:justify-start">
          <h2 className="mb-3 text-sm font-medium text-gray-900 uppercase">
            About
          </h2>
          <nav className="mb-10 list-none">
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                Company
              </a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                Careers
              </a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                Blog
              </a>
            </li>
          </nav>
        </div>
        <div className="flex flex-col items-center text-center md:text-start justify-center md:items-start md:justify-start">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
            Platform
          </h2>
          <nav className="mb-10 list-none">
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                Terms &amp; Privacy
              </a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                Pricing
              </a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                FAQ
              </a>
            </li>
          </nav>
        </div>
        <div className="flex flex-col items-center text-center md:text-start justify-center md:items-start md:justify-start">
          <h1 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
            Contact Info
          </h1>
          <nav className="mb-10 list-none">
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                Fortich St. Malaybalay City
              </a>
            </li>
            <li className="mt-3">
              <span className="text-gray-500">Phone: </span>
              <a
                href="tel:(239) 555-0108"
                className="text-gray-700 cursor-pointer hover:text-gray-900"
              >
                (239) 555-0108
              </a>
            </li>
            <li className="mt-3">
              <span className="text-gray-500">Email: </span>
              <a
                href="mailto: tagabukidproperty@gmail.com"
                className="text-gray-700 cursor-pointer hover:text-gray-900"
              >
                tagabukidproperty@gmail.com
              </a>
            </li>
          </nav>
        </div>
      </div>
      <div>
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-700 capitalize text-center">
            © 2023 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

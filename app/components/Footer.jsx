// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import Link from 'next/link';
// const Footer = () => {
//   return (
//     <footer className="border-t-[1px] border-black bg-transparent my-1 md:text-xl py-4">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-800">
//         {/* Left section (Social Links with Icons) */}
//         <div className="flex space-x-4">
//           <Link href="https://www.instagram.com/EngineeringIndiaYCCE" className="hover:text-pink-500 md:scale-150 md:px-2">
//             <FaInstagram />
//           </Link>
//           <Link href="https://www.linkedin.com/company/engineeringindiaycce" className="hover:text-blue-700 md:scale-150 md:px-2">
//             <FaLinkedin />
//           </Link>
//         </div>

//         {/* Middle section (Copyright & Contact Info) */}
//         <div className="text-center text-xl">
//           <p>&copy; {new Date().getFullYear()} Engineering India YCCE</p>
//           <p>Email: <Link href="mailto:contact@ei-ycce.com" className="text-blue-600">contact@ei-ycce.com</Link></p>
//           <p>Phone: <span className="text-blue-600">+91-XXXXXXXXXX</span></p>
//         </div>

//         {/* Right section (Legal Links) */}
//         <div className="flex space-x-4">
//           <Link href="/privacy-policy" className="hover:text-blue-500">
//             Privacy Policy
//           </Link>
//           <Link href="/terms-of-service" className="hover:text-blue-500">
//             Terms of Service
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow text-black m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="./logo.png" className="w-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Engineering India
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

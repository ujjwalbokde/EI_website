import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-orange-400 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-800">
        {/* Left section (Social Links with Icons) */}
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/EngineeringIndiaYCCE" className="hover:text-blue-500">
            <FaFacebook/>
          </Link>
          <Link href="https://www.instagram.com/EngineeringIndiaYCCE" className="hover:text-pink-500">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/company/engineeringindiaycce" className="hover:text-blue-700">
            <FaLinkedin />
          </Link>
        </div>

        {/* Middle section (Copyright & Contact Info) */}
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Engineering India YCCE</p>
          <p>Email: <Link href="mailto:contact@ei-ycce.com" className="text-blue-600">contact@ei-ycce.com</Link></p>
          <p>Phone: <span className="text-blue-600">+91-XXXXXXXXXX</span></p>
        </div>

        {/* Right section (Legal Links) */}
        <div className="flex space-x-4">
          <Link href="/privacy-policy" className="hover:text-blue-500">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-blue-500">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

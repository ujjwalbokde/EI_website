import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className=" shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-gray-600">Yeshwantrao Chavan College of Engineering, Nagpur, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-gray-600">+91 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-600">info@engineeringindiaycce.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
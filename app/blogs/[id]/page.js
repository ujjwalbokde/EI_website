// app/blogs/[id]/page.js
'use client'; // Mark this as a Client Component
import { blogs } from "@/data/blogs";
import { FaShare, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function BlogDetail({ params }) {
  const { id } = params;

  // Find the blog based on the ID
  const blog = blogs.find((blog) => blog.id === Number(id));

  // If the blog is not found, show a 404 message
  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center">Blog not found</div>;
  }

  // Handle the share functionality
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog.title,
          text: blog.content,
          url: window.location.href,
        });
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 text-sm mb-6">{new Date(blog.date).toLocaleDateString()}</p>
          <p className="text-gray-700 leading-relaxed mb-8">{blog.content}</p>
          <button
            onClick={handleShare}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <FaShare />
            Share
          </button>
        </div>
      </div>

      {/* Back to Blogs Link */}
      <Link href="/blogs">
        <div className="text-center mt-8">
          <h1 className="inline-flex items-center text-blue-600 hover:text-blue-700 underline cursor-pointer">
            <FaArrowLeft className="mr-2" />
            Back to Blogs
          </h1>
        </div>
      </Link>
    </div>
  );
}
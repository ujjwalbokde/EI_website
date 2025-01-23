// pages/blogs.js
import Link from 'next/link';
import { blogs } from '@/data/blogs';

export default function Blogs() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Engineering India YCCE Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 text-sm">{new Date(blog.date).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
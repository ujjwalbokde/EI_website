"use client"
// pages/blogs/index.js
import React from 'react';

const samplePosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    content: "Web development is evolving rapidly with new frameworks and tools...",
    author: "John Doe",
    date: "2023-10-01",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    content: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs...",
    author: "Jane Smith",
    date: "2023-10-02",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 3,
    title: "Introduction to Next.js",
    content: "Next.js is a React framework that enables functionality such as server-side rendering...",
    author: "Alice Johnson",
    date: "2023-10-03",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js",
    content: "Learn how to build scalable and efficient REST APIs using Node.js and Express...",
    author: "Bob Brown",
    date: "2023-10-04",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 5,
    title: "The Power of TypeScript",
    content: "TypeScript brings static typing to JavaScript, making your code more robust...",
    author: "Charlie Davis",
    date: "2023-10-05",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 6,
    title: "Getting Started with GraphQL",
    content: "GraphQL is a query language for APIs that allows clients to request exactly what they need...",
    author: "Eve Wilson",
    date: "2023-10-06",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 7,
    title: "Responsive Web Design Tips",
    content: "Learn the best practices for creating responsive web designs that work on all devices...",
    author: "Frank Miller",
    date: "2023-10-07",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 8,
    title: "Deploying Apps with Docker",
    content: "Docker simplifies the process of deploying applications by using containerization...",
    author: "Grace Lee",
    date: "2023-10-08",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 9,
    title: "The Art of Debugging",
    content: "Debugging is an essential skill for developers. Learn how to debug effectively...",
    author: "Henry Clark",
    date: "2023-10-09",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
  {
    id: 10,
    title: "Introduction to Machine Learning",
    content: "Machine learning is transforming industries. Get started with the basics...",
    author: "Ivy Adams",
    date: "2023-10-10",
    image: "https://via.placeholder.com/600x400", // Optional image
  },
];

const BlogCard = ({ post }) => {
  const sharePost = () => {
    const url = `https://yourwebsite.com/blogs/${post.id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <button
            onClick={sharePost}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
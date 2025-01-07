"use client"

import React from "react";
import { Calendar, Mail, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui"
import Image from "next/image";
import Link from "next/link";

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TechInnovators Club</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about">
                <a className="text-gray-600 hover:text-blue-600">About</a>
              </Link>
            </li>
            <li>
              <Link href="#activities">
                <a className="text-gray-600 hover:text-blue-600">Activities</a>
              </Link>
            </li>
            <li>
              <Link href="#info">
                <a className="text-gray-600 hover:text-blue-600">Info</a>
              </Link>
            </li>
            <li>
              <Link href="#members">
                <a className="text-gray-600 hover:text-blue-600">Members</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a className="text-gray-600 hover:text-blue-600">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to TechInnovators Club</h2>
            <p className="text-xl mb-8">Innovating the future, one project at a time</p>
            <button size="lg">Join Us Today</button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-4">
                TechInnovators Club is a dynamic community of tech enthusiasts, innovators, and future leaders.
                We're dedicated to exploring cutting-edge technologies, fostering creativity, and developing
                real-world solutions to today's challenges.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a coding novice or a seasoned developer, our club provides a supportive
                environment to learn, grow, and make an impact in the world of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Hackathons", description: "Participate in exciting coding competitions" },
                { title: "Workshops", description: "Learn new skills from industry experts" },
                { title: "Project Showcases", description: "Present your innovative ideas to the community" },
                { title: "Tech Talks", description: "Engage in discussions about the latest tech trends" },
                { title: "Networking Events", description: "Connect with like-minded individuals and professionals" },
                { title: "Community Outreach", description: "Use technology to make a positive impact in our community" },
              ].map((activity, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Club Information Section */}
        <section id="info" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Club Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2" />
                    Meeting Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Every Tuesday and Thursday</p>
                  <p>6:00 PM - 8:00 PM</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tech Building, Room 301</p>
                  <p>123 University Avenue</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" />
                    Membership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Open to all students</p>
                  <p>No prior experience required</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Member Showcase Section */}
        <section id="members" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
                <div key={member} className="text-center">
                  <Image
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={`Member ${member}`}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold">Member Name</h3>
                  <p className="text-sm text-gray-600">Role / Specialty</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Join Form Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" />
              </div>
              <button type="submit" className="w-full">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 TechInnovators Club. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="#">
              <a className="hover:text-blue-400">
                <Mail size={24} />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

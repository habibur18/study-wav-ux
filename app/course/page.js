"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CoursePage() {
  // Client-only state for countdown timer
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const courseEndDate = new Date("2024-12-31T23:59:59");
    const updateTimer = () => {
      const total = Date.parse(courseEndDate) - Date.now();
      if (total < 0) return setTimeLeft("Enrollment closed");

      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((total / (1000 * 60)) % 60);
      const seconds = Math.floor((total / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-green-700 text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-12 bg-green-600">
        <h1 className="text-4xl font-bold">MERN Stack Mastery</h1>
        <p className="mt-2 text-lg">
          Master MongoDB, Express, React, and Node.js in this comprehensive
          course.
        </p>
        <Image
          src="https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png"
          alt="MERN Stack Course"
          className="w-full max-w-lg mx-auto rounded-md shadow-lg mt-6"
          width={800}
          height={600}
        />
      </header>

      <main className="bg-gray-100 text-gray-900 rounded-t-3xl p-8 -mt-8">
        {/* Course Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700">
            About the Course
          </h2>
          <p className="mt-4">
            This course provides in-depth knowledge of the MERN stack (MongoDB,
            Express, React, Node.js). You&apos;ll learn to build robust web
            applications from scratch, gain practical experience, and become a
            full-stack developer ready for the job market.
          </p>
        </section>

        {/* Live Timer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700">
            Time Left to Enroll
          </h2>
          <div className="bg-white text-green-700 p-4 rounded-md text-center text-2xl font-bold">
            {timeLeft}
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700">
            What You Will Learn
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>Core concepts of MongoDB, Express, React, and Node.js</li>
            <li>Building RESTful APIs</li>
            <li>Handling frontend and backend integration</li>
            <li>Deploying full-stack applications</li>
          </ul>
        </section>

        {/* Opportunities After the Course */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700">
            Career Opportunities
          </h2>
          <p className="mt-4">
            Completing this course will prepare you for roles like:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>Full-Stack Developer</li>
            <li>Backend Developer</li>
            <li>Frontend Developer</li>
            <li>Web Application Developer</li>
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700">Requirements</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
            <li>Basic understanding of HTML, CSS, and JavaScript</li>
            <li>Laptop or desktop with internet connection</li>
            <li>Eagerness to learn and code</li>
          </ul>
        </section>

        {/* Course Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700">Course Content</h2>
          <div className="mt-4">
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">
                1. Introduction to MERN Stack
              </summary>
              <p className="ml-4 mt-2 text-gray-700">
                Overview of the technologies, setup, and prerequisites.
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">
                2. Building with MongoDB
              </summary>
              <p className="ml-4 mt-2 text-gray-700">
                Learn database management, schemas, and queries.
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">
                3. Express and Node.js
              </summary>
              <p className="ml-4 mt-2 text-gray-700">
                Create server-side APIs and handle routing.
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">
                4. Frontend with React
              </summary>
              <p className="ml-4 mt-2 text-gray-700">
                Design interactive UIs and manage state.
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">
                5. Final Project
              </summary>
              <p className="ml-4 mt-2 text-gray-700">
                Build and deploy a full-stack application.
              </p>
            </details>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-4">
            <details className="border-b pb-2">
              <summary className="cursor-pointer font-semibold text-gray-900">
                Do I need prior programming experience?
              </summary>
              <p className="ml-4 mt-2 text-gray-700">
                Basic knowledge of JavaScript is recommended but not required.
              </p>
            </details>
            <details className="border-b pb-2">
              <summary className="cursor-pointer font-semibold text-gray-900">
                Is there a certification after completion?
              </summary>
              <p className="ml-4 mt-2 text-gray-700">
                Yes, you will receive a certificate upon successful completion.
              </p>
            </details>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="bg-green-600 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold">$124.99 USD</h3>
          <p className="line-through text-gray-300">$250.00 USD</p>
          <button className="bg-white text-green-600 font-semibold px-6 py-3 mt-4 rounded-md shadow-md">
            Join Course
          </button>
          <p className="mt-2 text-sm">30-Day Money-Back Guarantee</p>
        </section>
      </main>
    </div>
  );
}

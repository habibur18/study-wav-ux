"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import CourseDetailsBanner from "./components/Course-details-banner";
import Mentors from "./components/Mentors";
import { StudyWavHero } from "./components/study-wav-hero";

export default function Home() {
  const discount = 9500; // discount amount in currency (e.g., ৳৫০০০)
  const originalPrice = 15000; // original price

  const finalPrice = originalPrice - discount; // calculate final price

  function handleCardClick() {
    console.log("clicked card");
  }

  // only clicked to the button separately
  // not the card itself
  function handleButtonClick() {
    console.log("clicked button");
  }

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col items-center justify-center min-h-screen "
    >
      {/* Hero Section */}
      <StudyWavHero />
      {/* Course Card Component */}
      <Card className="overflow-hidden max-w-xl border-none bg-gradient-to-b from-emerald-100">
        <div className="">
          <div className="aspect-video w-full">
            <img
              alt="Mobile App Development Course thumbnail showing mobile interfaces"
              className="object-cover w-full h-full"
              height="200"
              src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
              width="400"
            />
          </div>
          <div className="">
            <div>
              <ul className="flex justify-between gap-y-4 flex-wrap md:flex-nowrap p-2 *:p-2 *:text-sm *:bg-emerald-100 *:text-emerald-600 *:font-semibold *:rounded">
                <li>8০ টি প্রোজেক্ট</li>
                <li>৮০০+ রেকর্ড ভিডিও</li>
                <li>১৫ অ্যাসাইনমেন্ট</li>
                <li>৫০ প্রোবলেম সলভিং</li>
              </ul>
            </div>
          </div>
        </div>

        <CardHeader className=" p-4">
          <p className="font-semibold text-green-800 text-xl">
            MERN Stack ডেভেলপমেন্ট উইথ ডিজিটাল মার্কেটিং
          </p>

          {/* Price Section */}
          {discount ? (
            <div className=" mt-2">
              <p className="text-lg font-bold text-red-600 line-through">
                ৳{originalPrice.toLocaleString("bn-BD")}
              </p>
              <p className="text-2xl font-bold text-emerald-600">
                ৳{finalPrice.toLocaleString("bn-BD")}
              </p>
            </div>
          ) : (
            <p className="text-lg font-bold text-emerald-600">
              ৳{originalPrice.toLocaleString("bn-BD")}
            </p>
          )}
        </CardHeader>
        <CardFooter className=" p-4">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleButtonClick();
            }}
            className="bg-emerald-600 hover:bg-emerald-700 w-full"
          >
            এনরোল করুন
          </Button>
        </CardFooter>
      </Card>

      <br />
      <br />
      <br />
      {/* mentors */}
      <Mentors />

      {/* new course details banner */}
      <CourseDetailsBanner />
      {/* course details banner */}
      <div className="hidden bg-gradient-to-b from-emerald-50 to-white">
        {/* Banner Section */}
        <section className=" mx-auto py-12 flex gap-y-10 flex-col-reverse md:flex-row items-center justify-evenly px-6">
          {/* Left Side: Course Details */}
          <div className="w-full space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-green-800 ">
              MERN Stack ডেভেলপমেন্ট উইথ ডিজিটাল মার্কেটিং
            </h1>

            <p className="text-lg lg:max-w-[70ch] text-gray-700">
              একটি সম্পূর্ণ কোর্স যা আপনাকে MERN Stack Development এবং ডিজিটাল
              মার্কেটিং শিখাবে। এই কোর্সে আপনি শিখবেন কীভাবে আধুনিক ওয়েব
              অ্যাপ্লিকেশন তৈরি করবেন, সাথে ডিজিটাল মার্কেটিং এর বিভিন্ন দিক
              যেমন SMM, Email Marketing ইত্যাদি।
            </p>

            <ul className="hidden flex flex-wrap gap-4 md:gap-8 p-2 bg-emerald-100 text-emerald-600 font-semibold rounded-lg">
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                8০টি প্রোজেক্ট
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ৮০০+ রেকর্ড ভিডিও
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ১৫টি অ্যাসাইনমেন্ট
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ৫০টি প্রোবলেম সলভিং
              </li>
            </ul>

            {/* Course Timing */}
            <ul className="space-y-2 text-gray-700 mt-4">
              <li>
                <strong>Course Duration:</strong> 8 Months
              </li>
              <li>
                <strong>Start Date:</strong> 20th November 2024
              </li>
              <li>
                <strong>Enrollment Ends:</strong> 20th December 2024
              </li>
              <li>
                <strong>Support:</strong> 10 AM to 10 PM on Discord
              </li>
            </ul>

            {/* Pricing Section */}
            <div className=" flex items-center gap-8">
              <Button
                className="bg-emerald-600 py-6 px-8 text-lg hover:bg-emerald-700 max-w-max"
                onClick={() => alert("Enroll Now!")}
              >
                ১ম ব্যাচে ভর্তি হোন
              </Button>
              <div>
                {!discount ? (
                  <p className="text-lg font-bold text-emerald-600">
                    ৳{originalPrice.toLocaleString("bn-BD")}
                  </p>
                ) : (
                  <div className=" flex items-center gap-4">
                    <p className="text-lg font-bold text-red-600 line-through">
                      ৳{originalPrice.toLocaleString("bn-BD")}
                    </p>
                    <p className="text-2xl font-bold text-emerald-600">
                      ৳{finalPrice.toLocaleString("bn-BD")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full mx-auto flex justify-center md:justify-end items-center">
            <Image
              // src="https://media.geeksforgeeks.org/wp-content/uploads/20231110115359/Roadmap-to-Mern-stack-developer-copy-(3).webp"
              // src="https://c8.alamy.com/comp/P8KEF2/vertical-horizontal-optical-illusion-the-vertical-line-seems-to-be-longer-but-both-lines-are-of-the-same-length-bisected-line-appears-to-be-shorter-P8KEF2.jpg"
              // src="https://i.ibb.co.com/pyGJm1m/MERN.webp"
              src="/MERN.png"
              alt="MERN Stack Development with Digital Marketing"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="  py-4 px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-green-800">
              কোর্সের অন্তর্ভুক্তি
            </h2>
            <ul className="flex flex-wrap gap-4 md:gap-8 p-2 *:bg-emerald-100 text-emerald-600 font-semibold rounded-lg">
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                8০টি প্রোজেক্ট
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ৮০০+ রেকর্ড ভিডিও
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ১৫টি অ্যাসাইনমেন্ট
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ৫০টি প্রোবলেম সলভিং
              </li>

              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                জব প্লেসমেন্ট সাপোর্ট
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ফ্রিলান্সিং গাইডলাইন
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                সোশ্যাল মিডিয়া মার্কেটিং
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ইমেইল মার্কেটিং
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                Next.js
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                ক্লায়েন্ট হান্টিং আউটসাইড অফ মার্কেটপ্লেস
              </li>
              <li className="p-2 bg-white rounded shadow-sm flex items-center">
                সার্টিফিকেট অব সাকসেসফুল কমপ্লিশন
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

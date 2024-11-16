"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Mentors from "./components/Mentors";

export default function Home() {
  const discount = 5000; // discount amount in currency (e.g., ৳৫০০০)
  const originalPrice = 20000; // original price

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
      className="p-4 flex flex-col items-center justify-center min-h-screen cursor-pointer"
    >
      <Card className="overflow-hidden max-w-xl border-none bg-gradient-to-b from-emerald-100">
        <div className="">
          <div className="aspect-video w-full">
            <Image
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
      <Mentors />

      {/* banners */}
      <div className="bg-gradient-to-b from-emerald-100 to-white">
        {/* Banner Section */}
        <section className="max-w-screen-xl mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-between px-6">
          {/* Left Side: Course Details */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-green-800">
              MERN Stack ডেভেলপমেন্ট উইথ ডিজিটাল মার্কেটিং
            </h1>

            <p className="text-lg text-gray-700">
              একটি সম্পূর্ণ কোর্স যা আপনাকে MERN Stack Development এবং ডিজিটাল
              মার্কেটিং শিখাবে। এই কোর্সে আপনি শিখবেন কীভাবে আধুনিক ওয়েব
              অ্যাপ্লিকেশন তৈরি করবেন, সাথে ডিজিটাল মার্কেটিং এর বিভিন্ন দিক
              যেমন SEO, SMM ইত্যাদি।
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Course Duration:</strong> 3 Months
              </li>
              <li>
                <strong>Start Date:</strong> 1st December 2024
              </li>
              <li>
                <strong>Enrollment Ends:</strong> 25th November 2024
              </li>
              <li>
                <strong>Support:</strong> 10 AM to 10 PM on Discord
              </li>
            </ul>

            {/* Pricing Section */}
            <div className="mt-6">
              {discount ? (
                <div className="flex items-center space-x-4">
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
            </div>

            <Button
              className="bg-emerald-600 hover:bg-emerald-700 w-full mt-6"
              onClick={() => alert("Enroll Now!")}
            >
              1ম ব্যাচে ভর্তি হোন
            </Button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
              alt="MERN Stack Development with Digital Marketing"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="max-w-screen-xl mx-auto py-12 px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-green-800">
              কোর্সের অন্তর্ভুক্তি
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>8০টি প্রোজেক্ট</li>
              <li>৮০০+ রেকর্ড ভিডিও</li>
              <li>১৫টি অ্যাসাইনমেন্ট</li>
              <li>৫০টি প্রোবলেম সলভিং</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

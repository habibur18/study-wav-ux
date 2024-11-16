"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const discount = 9500;
const originalPrice = 15000;
const finalPrice = originalPrice - discount;

const microVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

const FeatureItem = ({ icon: Icon, text }) => (
  <motion.div
    className="flex items-center gap-2 bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
    variants={microVariants}
    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
  >
    <Icon className="w-5 h-5 text-emerald-600" />
    <span className="text-gray-700">{text}</span>
  </motion.div>
);

const CourseTag = ({ text }) => (
  <motion.div
    className="bg-emerald-100 font-bold text-emerald-600 px-4 py-2 rounded-full text-sm inline-flex items-center gap-2"
    variants={microVariants}
    whileHover={{
      scale: 1.02,
      // backgroundColor: "rgb(209 250 229)", // emerald-100
      backgroundColor: "#a7f3d0", // emerald-100
      transition: { duration: 0.2 },
    }}
  >
    <CheckCircle className="w-4 h-4 text-emerald-600" />
    {text}
  </motion.div>
);

const DateCard = ({ title, date, icon: Icon }) => (
  <motion.div
    className={`bg-emerald-50 p-4 rounded-lg border ${
      title === "Enrollment Starts"
        ? "border-emerald-100"
        : "border-emerald-300"
    } flex items-start gap-3`}
    variants={microVariants}
    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
  >
    <Icon className="w-5 h-5 text-emerald-600 mt-1" />
    <div>
      <p className="text-sm text-emerald-600 mb-1">{title}</p>
      <p className="font-semibold text-emerald-800">{date}</p>
    </div>
  </motion.div>
);

export default function CourseDetailsBanner() {
  const [isEnrolling, setIsEnrolling] = useState(false);

  return (
    <div className="w-full bg-gradient-to-b from-emerald-50 to-white">
      <section className="  py-8 md:py-12 px-4 md:px-6">
        <div className=" max-w-[1600px] mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-12">
          {/* Left Side: Course Details */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={microVariants}>
              <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                MERN Stack ডেভেলপমেন্ট উইথ ডিজিটাল মার্কেটিং
              </h1>
              <p className="text-lg text-gray-700">
                একটি সম্পূর্ণ কোর্স যা আপনাকে MERN Stack Development এবং ডিজিটাল
                মার্কেটিং শিখাবে। এই কোর্সে আপনি শিখবেন কীভাবে আধুনিক ওয়েব
                অ্যাপ্লিকেশন তৈরি করবেন, সাথে ডিজিটাল মার্কেটিং এর বিভিন্ন দিক
                যেমন SMM, Email Marketing ইত্যাদি।
              </p>
            </motion.div>

            {/* Important Dates */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={microVariants}
            >
              <DateCard
                title="Enrollment Starts"
                date="20th Nov 2024"
                icon={Calendar}
              />
              <DateCard
                title="Enrollment Ends"
                date="20th Dec 2024"
                icon={Calendar}
              />
            </motion.div>

            {/* Course Features */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={microVariants}
            >
              <FeatureItem icon={Clock} text="8 Months Duration" />
              <FeatureItem icon={Users} text="Discord Support" />
              <FeatureItem icon={Zap} text="Live Sessions" />
              <FeatureItem icon={CheckCircle} text="Job Placement" />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6"
              variants={microVariants}
            >
              <Button
                className="bg-emerald-600 py-6 px-8 text-lg hover:bg-emerald-700 w-full sm:w-auto transition-colors duration-200"
                disabled={isEnrolling}
                onClick={() => {
                  setIsEnrolling(true);
                  setTimeout(() => {
                    setIsEnrolling(false);
                  }, 2000);
                }}
              >
                {isEnrolling ? "প্রসেসিং..." : "১ম ব্যাচে ভর্তি হোন"}
              </Button>
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-red-600 line-through">
                  ৳{originalPrice.toLocaleString("bn-BD")}
                </span>
                <span className="text-2xl font-bold text-emerald-600">
                  ৳{finalPrice.toLocaleString("bn-BD")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/MERN.png"
              alt="MERN Stack Development with Digital Marketing"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Course Inclusions Section */}
      <section className=" max-w-[1600px] mx-auto py-8 md:py-12 px-4 md:px-6">
        <motion.div
          className="bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-green-800 mb-8">
            Course-এ যা যা থাকছে
          </h2>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {[
              "8০টি প্রোজেক্ট",
              "৮০০+ রেকর্ড ভিডিও",
              "১৫টি অ্যাসাইনমেন্ট",
              "৫০টি প্রোবলেম সলভিং",
              "জব প্লেসমেন্ট সাপোর্ট",
              "ফ্রিলান্সিং গাইডলাইন",
              "সোশ্যাল মিডিয়া মার্কেটিং",
              "ইমেইল মার্কেটিং",
              "Next.js",
              "ক্লায়েন্ট হান্টিং আউটসাইড অফ মার্কেটপ্লেস",
              "সার্টিফিকেট অব সাকসেসফুল কমপ্লিশন",
            ].map((text, index) => (
              <CourseTag key={index} text={text} />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

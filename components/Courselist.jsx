"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export function CourseList() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredCourses = [
    {
      title: "মার্ন স্ট্যাক ডেভেলপমেন্ট উইথ ডিজিটাল মার্কেটিং",
      stats: ["৪০ টি প্রজেক্ট", "৮০০+ রেকর্ডেড ভিডিও", "১৫ অ্যাসাইনমেন্ট"],
      price: "8,0000",
      image:
        "https://studywav.com/wp-content/uploads/2024/11/mobile-application-development-guidelines-riseuplabs.webp",
    },
    {
      title: "ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট কোর্স",
      stats: ["৩৫ টি প্রজেক্ট", "৬০০+ রেকর্ডেড ভিডিও", "১২ অ্যাসাইনমেন্ট"],
      price: "৪,০০০",
      image:
        "https://studywav.com/wp-content/uploads/2024/11/mobile-application-development-guidelines-riseuplabs.webp",
    },
  ];

  const generalCourses = [
    {
      title: "পাইথন প্রোগ্রামিং মাস্টারক্লাস",
      price: "৩,৯৯৯",
      image: "https://img-b.udemycdn.com/course/480x270/3499744_35e5_3.jpg",
    },
    {
      title: "ইউআই/ইউএক্স ডিজাইন ফান্ডামেন্টালস",
      price: "৩,৯৯৯",
      image: "https://i.ytimg.com/vi/xk7l3SHsHww/hq720.jpg",
    },
    {
      title: "ডেভঅপস এন্ড ক্লাউড কম্পিউটিং",
      price: "৪,৯৯৯",
      image: "https://i.ibb.co.com/4YCTcnG/images.jpg",
    },
  ];

  const upcomingCourses = [
    {
      title: "এডভান্সড মোবাইল অ্যাপ ডেভেলপমেন্ট",
      startDate: "১ মার্চ ২০২৪",
      price: "৬,০০০",
      image:
        "https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5cdb1b8550ed58f10e46069d_01_masterclass_appstore_screenshots.png",
    },
    {
      title: "আর্টিফিশিয়াল ইন্টেলিজেন্স ফর বিজনেস",
      startDate: "১ এপ্রিল ২০২৪",
      price: "৮,০০০",
      image: "https://i.ibb.co.com/WfBvjYp/Ai-Master-Class-Slider.jpg",
    },
    {
      title: "সাইবার সিকিউরিটি এক্সপার্ট কোর্স",
      startDate: "১৫ এপ্রিল ২০২৪",
      price: "৭,০০০",
      image: "https://i.ibb.co.com/JCH1yNk/1520080934989.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with improved background */}
      <section className="relative bg-green-600 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10 animate-pulse"></div>
        </div>
        <div className="container relative mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              স্কিল ডেভেলপমেন্ট কোর্স
            </h1>
            <p className="text-green-50 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              আপনার ক্যারিয়ার গড়ার জন্য সেরা প্রশিক্ষণ প্ল্যাটফর্ম
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-50 to-transparent"></div>
      </section>
      {/* Featured Courses Carousel */}
      <section className="container mx-auto max-w-6xl px-4 -mt-16 mb-16">
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="grid md:grid-cols-[1fr,1fr] bg-white">
                  <div className="relative h-[300px] md:h-[500px]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {course.stats.map((stat, i) => (
                          <Badge
                            key={i}
                            className="bg-green-100 text-green-800 px-3 py-1"
                          >
                            {stat}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                        <Badge
                          variant="outline"
                          className="border-yellow-400 text-yellow-700 px-3 py-1"
                        >
                          ফিচার্ড কোর্স
                        </Badge>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {course.title}
                      </h2>
                      <div className="pt-4">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-3xl md:text-4xl font-bold text-green-600">
                            ৳{course.price}
                          </span>
                        </div>
                        <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                          এনরোল করুন
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? featuredCourses.length - 1 : prev - 1
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === featuredCourses.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>
        </div>
      </section>
      {/* General Courses */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          জনপ্রিয় কোর্সসমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalCourses.map((course, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4 relative z-10 bg-white">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <Badge
                    variant="outline"
                    className="border-green-200 text-green-700"
                  >
                    জনপ্রিয় কোর্স
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors line-clamp-2">
                  {course.title}
                </CardTitle>
                <div className="space-y-4 pt-2">
                  <div className="text-xl font-bold text-green-600">
                    ৳{course.price}
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    এনরোল করুন
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Upcoming Courses */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            আপকামিং কোর্সসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingCourses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4 relative z-10 bg-white">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <Badge
                      variant="outline"
                      className="border-green-200 text-green-700"
                    >
                      শুরু হবে: {course.startDate}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <div className="space-y-4 pt-2">
                    <div className="text-xl font-bold text-green-600">
                      ৳{course.price}
                    </div>
                    <button className="w-full bg-white text-green-600 border-2 border-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1">
                      নোটিফিকেশন পান
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

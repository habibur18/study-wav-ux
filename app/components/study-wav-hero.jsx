// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   BookOpen,
//   CheckCircle,
//   Compass,
//   Headphones,
//   Users,
//   Zap,
// } from "lucide-react";

// export function StudyWavHero() {
//   return (
//     <section className="w-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
//       <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
//         <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
//           <div className="flex flex-col justify-center space-y-8 lg:col-span-5">
//             <div className="space-y-6">
//               <Badge
//                 variant="outline"
//                 className="w-fit border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-300"
//               >
//                 Study Wav - আপনার জ্ঞানের তরঙ্গ
//               </Badge>
//               <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                 ক্যারিয়ার উন্নতির নতুন অধ্যায় শুরু হোক আজই
//               </h1>
//               <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                 Study Wav- একটি প্ল্যাটফর্মে সবকিছু। আমাদের সম্পূর্ণ শিক্ষা
//                 প্ল্যাটফর্মের সাথে আপনার উৎকর্ষের যাত্রা শুরু করুন।
//               </p>
//             </div>
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
//                 <CheckCircle className="h-5 w-5" />
//                 <span>অভিজ্ঞ শিক্ষকমণ্ডলী</span>
//               </div>
//               <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
//                 <CheckCircle className="h-5 w-5" />
//                 <span>ইন্টারেক্টিভ কন্টেন্ট</span>
//               </div>
//               <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
//                 <CheckCircle className="h-5 w-5" />
//                 <span>ক্যারিয়ার গাইডলাইন</span>
//               </div>
//               <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
//                 <CheckCircle className="h-5 w-5" />
//                 <span>২৪/৭ সাপোর্ট</span>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 sm:flex-row">
//               <Button
//                 size="lg"
//                 className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 rounded"
//               >
//                 কোর্স ঘুরে দেখুন
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950 rounded"
//               >
//                 রেজিস্টার করুন
//               </Button>
//             </div>
//           </div>
//           <div className="grid gap-4 lg:col-span-7 lg:grid-cols-3">
//             <Card className="col-span-3 overflow-hidden bg-white/50 p-6 backdrop-blur-sm dark:bg-white/10">
//               <div className="flex items-center gap-4">
//                 <div className="rounded-full bg-green-600 p-3">
//                   <Zap className="h-8 w-8 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold">অভিনব শিক্ষা পদ্ধতি</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     আধুনিক প্রযুক্তি ও পারম্পরিক শিক্ষার সমন্বয়
//                   </p>
//                 </div>
//               </div>
//             </Card>
//             <Card className="bg-white/50 p-6 backdrop-blur-sm dark:bg-white/10">
//               <div className="space-y-2">
//                 <Users className="h-8 w-8 text-green-600" />
//                 <h3 className="text-xl font-semibold">লাইভ সেশন</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   সরাসরি প্রশ্নোত্তর
//                 </p>
//               </div>
//             </Card>
//             <Card className="bg-white/50 p-6 backdrop-blur-sm dark:bg-white/10">
//               <div className="space-y-2">
//                 <Compass className="h-8 w-8 text-green-600" />
//                 <h3 className="text-xl font-semibold">ক্যারিয়ার গাইড</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   ব্যক্তিগত পরামর্শ
//                 </p>
//               </div>
//             </Card>
//             <Card className="bg-white/50 p-6 backdrop-blur-sm dark:bg-white/10">
//               <div className="space-y-2">
//                 <BookOpen className="h-8 w-8 text-green-600" />
//                 <h3 className="text-xl font-semibold">বিষয়ভিত্তিক কোর্স</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   বিস্তৃত শিক্ষা সামগ্রী
//                 </p>
//               </div>
//             </Card>
//             <Card className="col-span-3 bg-white/50 p-6 backdrop-blur-sm dark:bg-white/10">
//               <div className="space-y-2">
//                 <Headphones className="h-8 w-8 text-green-600" />
//                 <h3 className="text-xl font-semibold">২৪/৭ সাপোর্ট</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   আপনার প্রতিটি প্রশ্নের উত্তর দিতে আমরা সদা প্রস্তুত
//                 </p>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  Compass,
  Headphones,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const FeatureCard = ({ icon: Icon, title, description, span = 1 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`col-span-${span} bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="rounded-full bg-green-600 p-3"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-100">
            {title}
          </h3>
          <p className="text-sm text-green-700 dark:text-green-200 mt-2">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function StudyWavHero() {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-8 lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="w-fit border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-300"
              >
                Study Wav - আপনার জ্ঞানের তরঙ্গ
              </Badge>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                ক্যারিয়ার উন্নতির নতুন অধ্যায় শুরু হোক আজই
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Study Wav- একটি প্ল্যাটফর্মে সবকিছু। আমাদের সম্পূর্ণ শিক্ষা
                প্ল্যাটফর্মের সাথে আপনার উৎকর্ষের যাত্রা শুরু করুন।
              </motion.p>
            </div>
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                "অভিজ্ঞ শিক্ষকমণ্ডলী",
                "ইন্টারেক্টিভ কন্টেন্ট",
                "ক্যারিয়ার গাইডলাইন",
                "২৪/৭ সাপোর্ট",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-green-700 dark:text-green-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 rounded"
              >
                কোর্স ঘুরে দেখুন
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950 rounded"
              >
                রেজিস্টার করুন
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="grid gap-4 lg:col-span-7 lg:grid-cols-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureCard
              icon={Zap}
              title="অভিনব শিক্ষা পদ্ধতি"
              description="আধুনিক প্রযুক্তি ও পারম্পরিক শিক্ষার সমন্বয়"
              span={3}
            />
            <FeatureCard
              icon={Users}
              title="লাইভ সেশন"
              description="সরাসরি প্রশ্নোত্তর"
            />
            <FeatureCard
              icon={Compass}
              title="ক্যারিয়ার গাইড"
              description="ব্যক্তিগত পরামর্শ"
            />
            <FeatureCard
              icon={BookOpen}
              title="বিষয়ভিত্তিক কোর্স"
              description="বিস্তৃত শিক্ষা সামগ্রী"
            />
            <FeatureCard
              icon={Headphones}
              title="২৪/৭ সাপোর্ট"
              description="আপনার প্রতিটি প্রশ্নের উত্তর দিতে আমরা সদা প্রস্তুত"
              span={2}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

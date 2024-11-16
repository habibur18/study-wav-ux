// // Import Next.js Image component
// import Image from "next/image";

// export default function Mentors() {
//   const mentors = [
//     {
//       name: "Alex Morgan",
//       role: "Senior Designer",
//       workplace: "Google",
//       image:
//         "https://studywav.com/wp-content/uploads/2024/10/Abdul-baset-study-wav-819x1024.jpg",
//     },
//     {
//       name: "Jamie Chen",
//       role: "Lead Developer",
//       workplace: "Facebook",
//       image:
//         "https://studywav.com/wp-content/uploads/2024/10/habibur-rahman-pic-1024x1024.jpeg",
//     },
//     {
//       name: "Sarah Wilson",
//       role: "UX Specialist",
//       workplace: "Arbree Solutions LTD",
//       image:
//         "https://studywav.com/wp-content/uploads/2024/10/Naimur-847x1024.jpeg",
//     },
//     {
//       name: "Md. Akramul Hoque Emran",
//       role: "Web Developer",
//       workplace: "",
//       image:
//         "https://studywav.com/wp-content/uploads/2024/10/Md.-Akramul-Hoque-Emran-web-developer-at-studywav.jpg",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-8">
//       <h2 className="text-center text-3xl font-bold text-green-700 mb-8">
//         আমাদের টিম
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {mentors.map((mentor, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={mentor.image}
//                 alt={mentor.name}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-lg"
//               />
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold text-green-800">
//                 {mentor.name}
//               </h3>
//               <p className="text-green-500 font-medium">{mentor.role}</p>
//               {mentor.workplace && (
//                 <p className="text-gray-500 text-sm mt-1">
//                   at {mentor.workplace}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Mentors() {
  const mentors = [
    {
      name: "Alex Morgan",
      role: "Senior Designer",
      workplace: "Google",
      image:
        "https://studywav.com/wp-content/uploads/2024/10/Abdul-baset-study-wav-819x1024.jpg",
    },
    {
      name: "Jamie Chen",
      role: "Lead Developer",
      workplace: "Facebook",
      image:
        "https://studywav.com/wp-content/uploads/2024/10/habibur-rahman-pic-1024x1024.jpeg",
    },
    {
      name: "Sarah Wilson",
      role: "UX Specialist",
      workplace: "Arbree Solutions LTD",
      image:
        "https://studywav.com/wp-content/uploads/2024/10/Naimur-847x1024.jpeg",
    },
    {
      name: "Md. Akramul Hoque Emran",
      role: "Web Developer",
      image:
        "https://studywav.com/wp-content/uploads/2024/10/Md.-Akramul-Hoque-Emran-web-developer-at-studywav.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-center text-3xl font-bold text-green-700 mb-8">
        আমাদের টিম
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="relative bg-emerald-50 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
          >
            <div className="relative w-full h-64 group">
              <div className="relative w-full h-64">
                <Image
                  src={mentor.image}
                  alt={`${mentor.name}'s profile`}
                  fill
                  className="rounded-t-lg object-cover object-[50%_10%]"
                />
              </div>

              <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-2">
                <Image
                  src="/study-wav-logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className=" absolute top-2 left-2  backdrop-blur-sm backdrop-opacity-35 rounded-lg"
                />
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-emerald-800">
                {mentor.name}
              </h3>
              <p className="text-emerald-600 font-medium">{mentor.role}</p>
              {mentor.workplace && (
                <p className="text-emerald-500/80 text-sm mt-1">
                  at {mentor.workplace}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

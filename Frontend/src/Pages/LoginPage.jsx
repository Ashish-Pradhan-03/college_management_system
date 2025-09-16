import React from "react";
import { useNavigate } from "react-router-dom";

const userInfo = [
  { id: "2", title: "Student", to: "/student", img: "👨‍🎓" },
  { id: "3", title: "Faculty", to: "/faculty", img: "👨‍🏫" },
  { id: "1", title: "Admin", to: "/admin", img: "👨‍💼" },
];

function LoginPage() {
  const navigate = useNavigate();

  const handleRoleSelection = (path) => {
    navigate(path);
  };

  return (
     <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1117] to-[#0d1b1e] p-4 sm:p-6 md:p-8">
       {/* Card Container */}
       <div className="bg-[#111] text-center p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-800 max-w-xs sm:max-w-md md:max-w-4xl w-full mx-4">
         {/* Title */}
         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2 sm:mb-3 md:mb-4">
           College Management System
         </h1>
         <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12">
           Welcome back! Please select your role to continue.
         </p>

         {/* Role Buttons */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
           {userInfo.map((role) => (
             <button
               key={role.id}
               onClick={() => handleRoleSelection(role.to)}
               className="cursor-pointer flex flex-col items-center justify-center bg-[#1a1a1a] border border-gray-700 rounded-xl py-6 sm:py-8 md:py-12 hover:border-cyan-400 hover:bg-[#0d1117] transition-all duration-300"
             >
               <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">{role.img}</span>
               <span className="text-white font-semibold text-base sm:text-lg md:text-xl">{role.title}</span>
             </button>
           ))}
         </div>
       </div>
     </div>
  );
}

export default LoginPage;

import React from "react";
import MyLogo from "../assets/LandingPage3.png";
import { Link } from "react-router-dom";  // ⬅️ Import Link

function LandingPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F9F6F0] text-gray-800 font-serif">
      <div className="w-full max-w-[1380px] h-[100vh] px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="md:w-1/2 w-full flex justify-left">
          <img
            src={MyLogo}
            alt="College Management"
            className="w-full max-w-xl md:max-w-[40rem] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full text-left">
          <h1 className="text-3xl md:text-6xl leading-tight font-serif">
            College Management System
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-[480px] font-serif">
            Streamline College Management, class Organization, and add student and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view Marks, and communicate effortlessly.
          </p>

          <div className="mt-6 flex flex-col items-center md:items-start gap-4">
            {/* Use Link instead of button */}
            <Link
              to="/login"
              className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer px-6 py-2 rounded-lg text-base md:text-lg transition"
            >
              Login
            </Link>

            <p className="text-sm md:text-base text-gray-500">
              Having login issues?{" "}
              <a href="#" className="text-purple-600 underline cursor-pointer">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

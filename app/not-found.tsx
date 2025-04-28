"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 text-white">
      <div className="text-center p-8 animate-fade-in">
        <h1 className="text-9xl font-bold mb-4 animate-pulse">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto">
          Looks like you&apos;ve wandered into the cosmic void. Let's get you
          back to reality!
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Return to Home
        </Link>
        <div className="mt-12 flex justify-center items-center">
          <Image
            className="h-50 w-auto animate-pulse"
            src={logo}
            alt="NestQuest"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

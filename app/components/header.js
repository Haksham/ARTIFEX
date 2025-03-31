"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitor-count");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setVisitorCount("Error");
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <header className="text-black py-2 mx-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Artifex */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Artifex</h1>
        </div>

        {/* Center Section: Visitor Count */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-black">Visitors: {visitorCount}</p>
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="flex space-x-6">
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>
          <Link href={"/info"} className="hover:text-blue-500">
            About
          </Link>
          <Link href={"/sign-in"} className="hover:text-blue-500">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Sprout } from "lucide-react";

const Navbar = () => {
  const router = useRouter(); // Initialize the router

  return (
    <div className="flex flex-row justify-around items-center p-4">
      <div className="font-bold text-3xl flex flex-row justify-center items-center gap-2"><Sprout className="text-[#16a32a] font-extrabold" size={35}/>Krushi-AI</div>
      <div className="flex flex-row">
        <Button onClick={()=>router.push('/analyze')} variant="outline" className="border-none hover:scale-105 transition-all duration-300">
            Analyze
        </Button>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;

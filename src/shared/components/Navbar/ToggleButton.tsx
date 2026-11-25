"use client";
import { useNavBar } from "@/shared/context/NavbarProvider";

function ToggleButton({ className = "" }: { className?: string | undefined }) {
  const { isOpen, toggleNavBar } = useNavBar();

  return (
    <button
      onClick={toggleNavBar}
      className={`fixed lg:hidden z-50 top-4 right-6 flex flex-col justify-center items-center gap-1.5 w-8 h-10 p-2 ${className}`}
    >
      <span
        className={`block w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isOpen && "rotate-45 translate-y-1.5"}`}
      ></span>
      <span
        className={`block w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isOpen && "hidden"}`}
      ></span>
      <span
        className={`block w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isOpen && "-rotate-45 -translate-y-1"}`}
      ></span>
    </button>
  );
}

export default ToggleButton;

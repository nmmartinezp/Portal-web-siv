"use client";
import Link from "next/link";
import { useNavBar } from "@/shared/context/NavbarProvider";
import { ReactNode } from "react";

function Item({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string | undefined;
}) {
  const { toggleNavBar } = useNavBar();
  return (
    <li
      className={`h-full max-lg:w-full flex justify-center items-center lg:px-4 border-b-4 border-transparent hover:border-[#f6c82c] hover:text-[#f6c82c] ${className}`}
    >
      <Link
        onClick={toggleNavBar}
        href={href}
        className="h-full w-full flex justify-center items-center"
        replace
      >
        {children}
      </Link>
    </li>
  );
}

export default Item;

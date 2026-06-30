"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const HEADER_LOGO = {
  id: 1,
  imageUrl: "/brand_assets/mith_media_logo_v1_nonvector.JPG",
  author: "dezeta",
};

const NAV_ITEMS = [{ href: "/gallery", label: "Gallery", icon: Menu }];

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps ) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-black font-sans selection:bg-[#E50914]/30">
      {/* Header */}
      <header className="relative flex justify-center items-center p-2 border-b border-black/20 bg-white/80">
        {/* Centered Logo */}
        <div>
          <Image
            key={HEADER_LOGO.id}
            src={HEADER_LOGO.imageUrl}
            alt={HEADER_LOGO.author}
            width={250}
            height={250}
          />
        </div>

        {/* Nav Menu */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="p-2">
            <Menu className="h-6 w-6" />
          </button>
          {isNavOpen && (
            <nav className="absolute top-full right-0 mt-2 w-48 bg-white border border-black/5 rounded-md shadow-lg z-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};

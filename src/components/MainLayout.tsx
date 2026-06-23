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

const NAV_ITEMS = [{ href: "/portfolio", label: "Portfolio", icon: Menu }];

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps ) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-black font-sans selection:bg-[#E50914]/30">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b border-black/5 bg-white/80 ">
        <div className="flex flex-row">
          <div className="">
            <Image
              key={HEADER_LOGO.id}
              src={HEADER_LOGO.imageUrl}
              alt={HEADER_LOGO.author}
              width={150}
              height={150}
            />
          </div>
          <nav>
            {NAV_ITEMS.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                ></Link>
              );
            })}
          </nav>
          {isNavOpen && (
            <nav>
              {NAV_ITEMS.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsNavOpen(false)}
                  ></Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

import { Header } from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-black font-sans selection:bg-[#E50914]/30">
      <Header />
      <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
    </div>
  );
};

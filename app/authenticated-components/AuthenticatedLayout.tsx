"use client";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Loading from "../loading";
import { useUser } from "../providers/UserProvider";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  if (user == null) {
    return (
      <div>
        <Nav />
        {children}
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <div className="w-64 min-full border-r-[1px] border-slate-400 bg-slate-50"></div>
      <div className="w-full h-auto flex flex-col">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;

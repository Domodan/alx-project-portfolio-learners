import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Navbar from "../NavBar";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
}

export default function HeaderFooterLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

import { ReactNode } from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

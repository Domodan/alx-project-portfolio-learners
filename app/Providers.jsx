"use client";
//the auth uses browser capabilities that's why we do the above..
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}><ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider></SessionProvider>;
};

export default Provider;

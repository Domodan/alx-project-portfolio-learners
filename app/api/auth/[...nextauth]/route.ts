import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from 'next-auth/providers/credentials';
import User from "@/models/user";
import {connectToDB} from "@/utils/database"
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
      },
      async authorize(credentials, req) {

        try {
          await connectToDB()
          const {email, password} = credentials as {
            email: string,
            password: string
          };
          const user = await User.findOne({email})

          if(!user) throw Error("email/password mismatch");

          const passwordMatch = await user.comparePassword(password);
          if(!passwordMatch) throw Error("email/password mismatch");
          
          return {
            name: user.lastName,
            email: user.email,
            role: user.role,
            id: user._id
          }
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt(params:any){
      if(params.user?.role){
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({session, token}){
      if(session.user){
        (session.user as {id: string}).id = token.id as string;
        (session.user as {role: string}).role = token.role as string;

      }
      return session
    }
  },
  pages: {
    signIn: "/auth/login"
  }
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}
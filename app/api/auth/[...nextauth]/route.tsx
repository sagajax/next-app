import NextAuth from "next-auth/next";
import {PrismaAdapter} from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from 'bcrypt';

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{label:'Email',type:'email',placeholder:'Email'},
                password:{label:'Password',type:'password',placeholder:'Password'}
                },
            
            async authorize(credentials,req){
                if(!credentials?.email || !credentials.password) return null;
                const user = await prisma.user.findUnique({
                    where:{email:credentials.email},

                }) ;
                if(!user) return null;
                   const passwordMatch= await bcrypt.compare(credentials.password,user.hashedPassword!)
                     if(passwordMatch){
                          return user;}
                    return  null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ], 
    session:{
        strategy:'jwt'
    }
};

const handler = NextAuth(authOptions);

export  { handler as GET , handler as POST};
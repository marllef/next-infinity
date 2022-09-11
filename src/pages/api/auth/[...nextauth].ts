import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: "~marllefH~",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  providers: [
    Credentials({
      name: "Email e Senha",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) throw new Error("Email não cadastrado.");

        if (
          user &&
          (await bcrypt.compare(credentials?.password!, user.password))
        ) {
          const { password, ...rest } = user;
          return rest;
        }

        return null;
      },
    }),
  ],
};

export default NextAuth(nextAuthOptions);

import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, ADMIN_EMAIL } = process.env

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    error: "/auth/login",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email === ADMIN_EMAIL
      }

      return "Access Denied"
    },
  },
}

export default NextAuth(authOptions)

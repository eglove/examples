import { isNil } from 'lodash';
import NextAuth, { NextAuthOptions } from 'next-auth';
import DuendeIdentityServer6 from 'next-auth/providers/duende-identity-server6';

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt({ token, profile, account }) {
      let newToken = token;

      if (!isNil(profile)) {
        newToken = {
          ...token,
          username: profile.username,
        };
      }

      if (!isNil(account)) {
        newToken = {
          ...newToken,
          access_token: account.access_token,
        };
      }

      return newToken;
    },
    session({ token, session }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
  providers: [
    DuendeIdentityServer6({
      authorization: { params: { scope: 'openid profile auctionApp' } },
      clientId: 'nextApp',
      clientSecret: 'secret',
      id: 'id-server',
      idToken: true,
      issuer: 'http://localhost:5000',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

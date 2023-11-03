import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, _req) {
        const mockUser = {
          id: process.env.MOCK_USER_ID || '42',
          name: process.env.MOCK_USER_NAME || 'Mock User',
          image: process.env.MOCK_USER_IMAGE || '',
          email: process.env.MOCK_USER_EMAIL || '',
          password: process.env.MOCK_USER_PASSWORD || '',
        };

        if (!mockUser.email || !mockUser.password) {
          return null;
        }

        if (
          credentials?.email === mockUser.email &&
          credentials.password === mockUser.password
        ) {
          return mockUser;
        } else {
          return null;
        }
      },
    }),
  ],
};

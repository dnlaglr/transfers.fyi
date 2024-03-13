import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './_layout';
import { Amplify } from 'aws-amplify';
import AuthProvider from '@/context/AuthContext';

Amplify.configure(
  {
    Auth: {
      Cognito: {
        userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID!,
        userPoolClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID!,
      },
    },
  },
  {
    ssr: true,
  }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

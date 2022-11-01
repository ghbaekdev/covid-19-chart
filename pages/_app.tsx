import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global-style';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Layout from '../components/Layout.tsx/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Hydrate state={pageProps?.dehydratedState}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

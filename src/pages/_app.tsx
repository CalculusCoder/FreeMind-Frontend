import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleFonts } from "next-google-fonts";
import "animate.css/animate.min.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import * as gtag from "../../gtag";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  const isMembersHome = router.pathname.startsWith("/MembersHome");
  return (
    <SessionProvider session={session}>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider enableSystem={true} attribute="class">
          <div
            className={
              isMembersHome
                ? "min-h-screen bg-[#F1E6FF] dark:bg-indigo-950"
                : "min-h-screen"
            }
          >
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
}

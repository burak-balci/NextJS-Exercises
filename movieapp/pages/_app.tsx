import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

import type { AppProps } from "next/app";

import SideMenu from '../src/components/UI/molecules/sideMenu/sideMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <nav>
        <SideMenu/>
      </nav>
      <section id = "MainSection">
        <Component {...pageProps} id = "app" />
      </section>
      <footer>
      </footer>
    </>
  );
}

export default MyApp

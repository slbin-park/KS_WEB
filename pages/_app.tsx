import type { AppProps } from "next/app";
import NavBar from "../src/components/UI/molecules/navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return(
      <>
        <nav>
          <NavBar/>
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
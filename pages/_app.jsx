import "../styles/globals.scss";

import Header from "../components/Header/Header";
import navLinks from "../utils/navLinks";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header navLinks={navLinks} /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

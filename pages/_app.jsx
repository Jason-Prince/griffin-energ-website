import "normalize.css";
import "../styles/globals.scss";

import Body from "../components/body/Body";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Body>
        <Component {...pageProps} />
      </Body>
    </>
  );
}

export default MyApp;

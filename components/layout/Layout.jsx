import Head from "next/head";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Griffin Energ Consulting | Home</title>
        {/* favicons */}
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </Head>
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;

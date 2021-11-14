import Banner from "../components/Home/Banner";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
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
      <Banner />
    </div>
  );
}

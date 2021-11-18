import Footer from "../footer/Footer";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import styles from "./body.module.scss";

const Body = ({ children }) => {
  return (
    <>
      <Layout className={styles.layout}>
        <Header className={styles.header} />
        <div className={styles.main}>{children}</div>
        <Footer className={styles.footer} />
      </Layout>
    </>
  );
};

export default Body;

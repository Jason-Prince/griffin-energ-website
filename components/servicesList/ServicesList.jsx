import Image from "next/image";
import styles from "./servicesList.module.scss";

const ServicesList = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <h1>Service</h1>
        </div>
        {/* Odd */}
        <div className={styles.cardContainerOdd}>
          <div className={styles.cardImg}>
            <Image
              src="https://via.placeholder.com/1280x720?text=Whole+Building+Energy+Modeling"
              layout="responsive"
              width={1280}
              height={720}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              <p>Whole Building Energy Modeling</p>
            </div>
            <div className={styles.text}>
              <p>
                A Home Energy Rating System (HERS) provides a standard
                measurement of a home’s energy efficiency. Ratings are used for
                both and <strong>new</strong> and <strong>existing</strong>{" "}
                homes.
              </p>
            </div>
            <div className={styles.text}>
              <p>• Life-Cycle Cost Analysis</p>
              <p>• Utility Incentive(s)</p>
              <p>• Latitude Study</p>
            </div>
          </div>
        </div>
        {/* Even */}
        <div className={styles.cardContainerEven}>
          <div className={styles.cardImg}>
            <Image
              src="https://via.placeholder.com/1280x720?text=Energy+Consulting"
              layout="responsive"
              width={1280}
              height={720}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              <p>Energy Consulting</p>
            </div>
            <div className={styles.text}>
              <p>
                A Home Energy Rating System (HERS) provides a standard
                measurement of a home’s energy efficiency. Ratings are used for
                both and <strong>new</strong> and <strong>existing</strong>{" "}
                homes.
              </p>
            </div>
            <div className={styles.text}>
              <p>• Commercial</p>
              <p>• Residential</p>
            </div>
          </div>
        </div>
        {/* Odd */}
        <div className={styles.cardContainerOdd}>
          <div className={styles.cardImg}>
            <Image
              src="https://via.placeholder.com/1280x720?text=HERS+Rating"
              layout="responsive"
              width={1280}
              height={720}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              <p>HERS Rating</p>
            </div>
            <div className={styles.text}>
              <p>
                A Home Energy Rating System (HERS) provides a standard
                measurement of a home’s energy efficiency. Ratings are used for
                both and <strong>new</strong> and <strong>existing</strong>{" "}
                homes.
              </p>
            </div>
            <div className={styles.text}>
              <p>• Zero Energy Ready Homes</p>
              <p>• EPA Energy STAR program</p>
              <p>• Energy Efficient Mortgage</p>
              <p>• Energy Code Compliance</p>
            </div>
          </div>
        </div>
        {/* Even */}
        <div className={styles.cardContainerEven}>
          <div className={styles.cardImg}>
            <Image
              src="https://via.placeholder.com/1280x720?text=Building+Certifications"
              layout="responsive"
              width={1280}
              height={720}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              <p>Building Certifications</p>
            </div>
            <div className={styles.text}>
              <p>
                A Home Energy Rating System (HERS) provides a standard
                measurement of a home’s energy efficiency. Ratings are used for
                both and <strong>new</strong> and <strong>existing</strong>{" "}
                homes.
              </p>
            </div>
            <div className={styles.text}>
              <p>• International Living Future Institute (ILFI)</p>
              <p>• Leadership in Energy Efficient Design (LEED)</p>
              <p>• Green Building Initiative (Green Globes)</p>
              <p>• ENERGY STAR®</p>
            </div>
          </div>
        </div>
        {/* Odd */}
        <div className={styles.cardContainerOdd}>
          <div className={styles.cardImg}>
            <Image
              src="https://via.placeholder.com/1280x720?text=Whole+Building+Energy+Modeling"
              layout="responsive"
              width={1280}
              height={720}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              <p>Architectural Design</p>
            </div>
            <div className={styles.text}>
              <p>
                A Home Energy Rating System (HERS) provides a standard
                measurement of a home’s energy efficiency. Ratings are used for
                both and <strong>new</strong> and <strong>existing</strong>{" "}
                homes.
              </p>
            </div>
            <div className={styles.text}>
              <p>• EPA Energy STAR program</p>
              <p>• Energy Efficient Mortgage</p>
              <p>• Energy Code Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;

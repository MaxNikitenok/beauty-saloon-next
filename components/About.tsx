import Image from "next/image";
import styles from "../styles/About.module.css";
import { CgScrollV } from "react-icons/cg";

const About = () => {
  return (
    <div className={styles.about}>
          <div className={styles.about_title}>
            <Image src="/comma.png" width={80} height={64} alt="comma" />
          </div>
          <div className={styles.about_description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu
              nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque
              accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada
              sociis tristique. Viverra augue lorem ut quisque quam tortor,
              malesuada iaculis.
            </p>
            <p>
              Et elementum at nulla venenatis, faucibus integer. Auctor neque
              eros, viverra rutrum. Fames ultrices condimentum tortor nec
              penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
            </p>
          </div>
        </div>
  );
};

export default About;

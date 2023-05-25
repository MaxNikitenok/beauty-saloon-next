import styles from "../styles/Main.module.css";
import { CgScrollV } from "react-icons/cg";

const Main = () => {
  return (
    <main className={styles.main}>
    <h1 className={styles.main_title}>
      Салон красоты
      <br />
      «Delote-Beauty»
      <br />
      на Ленинской
    </h1>
    <div className={styles.scroll}>
      <CgScrollV size={30} />
      <span>Прокрутите вниз</span>
    </div>
  </main>
  );
};

export default Main;

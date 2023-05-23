"use client";

import styles from "../styles/not-found.module.css";
import { useRouter } from "next/navigation";

const Custom404 = () => {
  const { push } = useRouter();

  setTimeout(() => {
    push('/');
  }, 4000)
  setTimeout(() => {
    location.reload()
  }, 5000)

  return (
    <div className={styles.notFound}>
      <div className={styles.mask}>
        <p className={styles.code}>404</p>
        <p className={styles.codeDescription}>Страница не найдена</p>
        <p className={styles.toHome}>Возвращаем вас на главную</p>
        <p className={styles.line}></p>
      </div>
    </div>
  );
};

export default Custom404;

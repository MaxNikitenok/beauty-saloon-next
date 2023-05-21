'use client';
import styles from "../styles/not-found.module.css";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Custom404= () => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push('/');
    }, 3000)
     
  }, []);
  return (
    <div className={styles.notFound}>
      <div className={styles.text}><p>404 | Страница не найдена</p></div>
    </div>
  );
};

export default Custom404;

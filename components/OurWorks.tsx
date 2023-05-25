"use client";

import { useState } from "react";
import styles from "../styles/OurWorks.module.css";
import Image from "next/image";

const works = [
  {
    id: 301,
    type: "visage",
    image: "/works/visage-1.png",
    description: "work item",
  },
  {
    id: 302,
    type: "visage",
    image: "/works/visage-2.png",
    description: "work item",
  },
  {
    id: 303,
    type: "visage",
    image: "/works/visage-3.png",
    description: "work item",
  },
  {
    id: 304,
    type: "visage",
    image: "/works/visage-4.png",
    description: "work item",
  },
  {
    id: 305,
    type: "hair",
    image: "/works/hair-1.png",
    description: "work item",
  },
  {
    id: 306,
    type: "hair",
    image: "/works/hair-2.png",
    description: "work item",
  },
  {
    id: 307,
    type: "hair",
    image: "/works/hair-3.png",
    description: "work item",
  },
  {
    id: 308,
    type: "manicure",
    image: "/works/manicure-1.png",
    description: "work item",
  },
  {
    id: 309,
    type: "manicure",
    image: "/works/manicure-2.png",
    description: "work item",
  },
];

const OurWorks = () => {
  const [typeFilter, setTypeFilter] = useState("");

  const filteredWorks = works.filter((work) =>
    typeFilter ? work.type === typeFilter : work.type
  );

  return (
    <div className={styles.ourWorks}>
      <div className={styles.wrapper}>
        <div className={styles.ourWorks_title}>Наши работы</div>
        <nav className={styles.ourWorks_navigation}>
          <div
            className={
              typeFilter === ""
                ? styles.navigation_activeItem
                : styles.navigation_item
            }
            onClick={() => setTypeFilter("")}
          >
            Показать все
          </div>
          <div
            className={
              typeFilter === "hair"
                ? styles.navigation_activeItem
                : styles.navigation_item
            }
            onClick={() => setTypeFilter("hair")}
          >
            Парикмахерские услуги
          </div>
          <div
            className={
              typeFilter === "manicure"
                ? styles.navigation_activeItem
                : styles.navigation_item
            }
            onClick={() => setTypeFilter("manicure")}
          >
            Маникюр
          </div>
          <div
            className={
              typeFilter === "visage"
                ? styles.navigation_activeItem
                : styles.navigation_item
            }
            onClick={() => setTypeFilter("visage")}
          >
            Визаж
          </div>
          <div
            className={
              typeFilter === "pedicure"
                ? styles.navigation_activeItem
                : styles.navigation_item
            }
            onClick={() => setTypeFilter("pedicure")}
          >
            Педикюр
          </div>
        </nav>
        <div className={styles.ourWorks_works}>
          {filteredWorks.map((work) => {
            return (
              <div className={styles.works_item} key={work.id}>
                <Image
                  className={styles.image}
                  src={work.image}
                  width={416}
                  height={416}
                  alt={work.description}
                />
              </div>
            );
          })}
          {!filteredWorks.length && (
            <div className={styles.works_emptyItem}>
              Упс... Фото работ ещё не добавлены.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;

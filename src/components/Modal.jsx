import React from "react";
import { useRef } from "react";
import styles from "./modal.module.scss";

export default function Modal({ title, root, children }) {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.classList.add(styles.fadeOut);
    ref.current.addEventListener(
      "animationend",
      (e) => {
        root.unmount(); ///destruimos el componente
      },
      { once: true } ///hacemos que el eventlistener se asigne solo una vez, pues recordemos que el componente se destruye 
      ///y va seguir intentando asignarse 
    );
  };

  return (
    <div ref={ref} className={styles.modalContainer}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
          <div>{title}</div>
          <div>
            <button className={styles.closeButton} onClick={handleClick}>
              x
            </button>
          </div>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}

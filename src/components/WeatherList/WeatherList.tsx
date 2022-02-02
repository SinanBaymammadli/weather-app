import React from "react";
import SunIcon from "../Icons/SunIcon";
import styles from "./WeatherList.module.scss";

export function WeatherList() {
  return (
    <div className={styles.list}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <button className={styles.item} key={i}>
          <p className={styles.time}>10:00</p>
          <div>
            <SunIcon />
          </div>
          <h3 className={styles.degree}>12°</h3>
        </button>
      ))}
    </div>
  );
}

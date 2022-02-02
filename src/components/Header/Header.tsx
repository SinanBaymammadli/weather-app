import React from "react";
import SunIcon from "../Icons/SunIcon";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.icon}>
          <SunIcon />
        </div>

        <div className={styles.weather}>
          <div>
            <div className={styles.weather_min_max}>
              <p>Clear</p>
              <p>12° / 2°</p>
            </div>

            <h1>12°</h1>
          </div>
        </div>
      </div>

      <div className={styles.date_city}>
        <div>
          <p className={styles.city}>Munich</p>
          <h2>Thursday</h2>
          <h2>28. September</h2>
        </div>
      </div>
    </header>
  );
}

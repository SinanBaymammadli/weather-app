import format from "date-fns/format";
import React from "react";

import { Weather } from "../../models";
import CloudIcon from "../Icons/CloudIcon";
import SunIcon from "../Icons/SunIcon";
import styles from "./Header.module.scss";

type HeaderProps = Weather;

export function Header({ date, city, condition, temperature }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.icon}>{condition === "Clear" ? <SunIcon /> : <CloudIcon />}</div>

        <div className={styles.weather}>
          <div>
            <div className={styles.weather_min_max}>
              <p>{condition}</p>
              <p>
                {temperature.max}° / {temperature.min}°
              </p>
            </div>

            <h1 data-testid="main-temperature">{temperature.current}°</h1>
          </div>
        </div>
      </div>

      <div className={styles.date_city}>
        <div>
          <p className={styles.city}>{city}</p>
          <h2>{format(new Date(date), "cccc")}</h2>
          <h2>{format(new Date(date), "d. LLLL")}</h2>
        </div>
      </div>
    </header>
  );
}

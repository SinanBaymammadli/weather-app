import format from "date-fns/format";
import React from "react";

import { Forecast } from "../../models";
import CloudIcon from "../Icons/CloudIcon";
import SunIcon from "../Icons/SunIcon";
import styles from "./Header.module.scss";

interface HeaderProps extends Forecast {}

export function Header({ date, city, condition, temperature }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.icon}>
          {condition === "Clear" ? (
            <SunIcon data-testid="sun-icon" />
          ) : (
            <CloudIcon data-testid="cloud-icon" />
          )}
        </div>

        <div className={styles.forecast}>
          <div>
            <div className={styles.forecast_min_max}>
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

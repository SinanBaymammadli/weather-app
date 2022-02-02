import format from "date-fns/format";
import React from "react";
import { Weather } from "../../models";
import CloudIcon from "../Icons/CloudIcon";
import SunIcon from "../Icons/SunIcon";
import styles from "./WeatherList.module.scss";

interface WeatherList {
  list: Weather[];
  selectedDate: string;
  onSelectedDateChange: (date: string) => void;
}

export function WeatherList({
  list,
  selectedDate,
  onSelectedDateChange,
}: WeatherList) {
  return (
    <div className={styles.list}>
      {list?.map((weather) => {
        const isSelected = weather.date === selectedDate;

        return (
          <button
            className={`${styles.item} ${isSelected ? styles.selected : ""}`}
            key={weather.date}
            onClick={() => onSelectedDateChange(weather.date)}
          >
            <p className={styles.time}>
              {format(new Date(weather.date), "HH:mm")}
            </p>
            <div>
              {weather.condition === "Clear" ? <SunIcon /> : <CloudIcon />}
            </div>
            <h3 className={styles.degree}>{weather.temperature.current}°</h3>
          </button>
        );
      })}
    </div>
  );
}

import format from "date-fns/format";
import React, { useEffect, useRef } from "react";

import { Forecast } from "../../models";
import CloudIcon from "../Icons/CloudIcon";
import SunIcon from "../Icons/SunIcon";
import styles from "./ForecastListItem.module.scss";

interface ForecastListItemProps {
  isSelected: boolean;
  forecast: Forecast;
  onSelectedForecastChange: (forecast: Forecast) => void;
}

export function ForecastListItem({
  isSelected,
  forecast,
  onSelectedForecastChange,
}: ForecastListItemProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isSelected) {
      ref.current?.scrollIntoView();
    }
  }, [isSelected]);

  return (
    <button
      className={`${styles.item} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelectedForecastChange(forecast)}
      ref={ref}
    >
      <p className={styles.time}>{format(new Date(forecast.date), "HH:mm")}</p>
      <div>{forecast.condition === "Clear" ? <SunIcon /> : <CloudIcon />}</div>
      <h3 className={styles.degree}>{forecast.temperature.current}°</h3>
    </button>
  );
}

import React from "react";

import styles from "./ForecastList.module.scss";

interface ForecastListProps {
  children: React.ReactNode;
}

export function ForecastList({ children }: ForecastListProps) {
  return <div className={styles.forecast_list}>{children}</div>;
}

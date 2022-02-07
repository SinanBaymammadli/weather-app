import closestIndexTo from "date-fns/closestIndexTo";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { ForecastList } from "../components/ForecastList/ForecastList";
import { ForecastListItem } from "../components/ForecastListItem/ForecastListItem";
import { Header } from "../components/Header/Header";
import { ForecastRepository } from "../data";
import { Forecast } from "../models";
import styles from "./index.module.scss";

function useCurrentForcast(forecastList: Forecast[]): [Forecast, (forecast: Forecast) => void] {
  const dateList = forecastList.map((forecast) => new Date(forecast.date));
  const closestDateIndex = closestIndexTo(new Date(), dateList) ?? 0;
  const closestDate = dateList[closestDateIndex];
  const [selectedDate, setSelectedDate] = useState(Number(closestDate));
  const selectedForecast = forecastList.find((f) => f.date === selectedDate) ?? forecastList[0];

  function setSelectedForecast(forecast: Forecast) {
    return setSelectedDate(forecast.date);
  }

  return [selectedForecast, setSelectedForecast];
}

interface HomeProps {
  forecastList: Forecast[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const forecastList = await ForecastRepository.getForecastList();

  return {
    props: { forecastList },
  };
};

const Home: NextPage<HomeProps> = ({ forecastList }) => {
  const [selectedForecast, setSelectedForecast] = useCurrentForcast(forecastList);

  return (
    <div className={styles.page}>
      <Head>
        <title>Weather App</title>
      </Head>

      {selectedForecast && (
        <Header
          date={selectedForecast.date}
          city={selectedForecast.city}
          temperature={selectedForecast.temperature}
          condition={selectedForecast.condition}
        />
      )}

      <ForecastList>
        {forecastList?.map((forecast) => {
          const isSelected = forecast.date === selectedForecast.date;

          return (
            <ForecastListItem
              key={forecast.date}
              isSelected={isSelected}
              forecast={forecast}
              onSelectedForecastChange={setSelectedForecast}
            />
          );
        })}
      </ForecastList>
    </div>
  );
};

export default Home;

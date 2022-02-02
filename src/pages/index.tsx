import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { Header } from "../components/Header/Header";
import { WeatherList } from "../components/WeatherList/WeatherList";
import { WeatherRepository } from "../data";
import { Weather } from "../models";
import styles from "./index.module.scss";

interface HomeProps {
  list: Weather[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const list = await WeatherRepository.getWeatherList();

  return {
    props: { list },
  };
};

const Home: NextPage<HomeProps> = ({ list }) => {
  const [selectedDate, setSelectedDate] = useState(list[0].date);
  const selected = list.find((item) => item.date === selectedDate);

  return (
    <div className={styles.page}>
      <Head>
        <title>Weather App</title>
      </Head>
      {selected && (
        <Header
          date={selected.date}
          city={selected.city}
          temperature={selected.temperature}
          condition={selected.condition}
        />
      )}

      <WeatherList
        list={list}
        selectedDate={selectedDate}
        onSelectedDateChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
};

export default Home;

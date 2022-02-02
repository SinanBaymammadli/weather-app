import type { NextPage, GetServerSideProps } from "next";
import { Header } from "../components/Header/Header";
import { WeatherList } from "../components/WeatherList/WeatherList";
import styles from "./index.module.scss";

interface Props {
  text: "hello";
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: {
      text: "hello",
    },
  };
};

const Home: NextPage<Props> = ({ text }) => {
  return (
    <div className={styles.page}>
      <Header />

      <WeatherList />
    </div>
  );
};

export default Home;

import type { NextPage, GetServerSideProps } from "next";

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
  return <div>{text}</div>;
};

export default Home;

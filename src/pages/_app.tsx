import "../styles/global.scss";

import type { AppProps } from "next/app";

if (process.env.NODE_ENV !== "production") {
  require("../../mocks");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

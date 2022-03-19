import { Fragment } from "react";
import "../styles/globals.css";
import Navigation from "./components/navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

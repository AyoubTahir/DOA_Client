import Master from "../layouts/Master";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Master>
      <Component {...pageProps} />
    </Master>
  );
}

export default MyApp;

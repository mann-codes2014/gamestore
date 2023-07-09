import config from "@config/config.json";
import theme from "@config/theme.json";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";
interface Config {
  params: {
    tag_manager_id: string;
  };
}

interface Theme {
  fonts: {
    font_family: {
      primary: string;
      secondary?: string;
    };
  };
}

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState<string | undefined>();
  useEffect(() => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${
        sf ? "&family=" + sf : ""
      }&display=swap`
    ).then((res) => res.text().then((css) => setFontcss(css)));
  }, [pf, sf]);

  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

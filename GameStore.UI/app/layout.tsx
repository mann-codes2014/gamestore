"use client";
import config from "@config/config.json";
import theme from "@config/theme.json";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";
export default function RootLayout({ children }: any) {
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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

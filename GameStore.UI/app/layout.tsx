"use client";
import { ThemeProvider } from "@layouts/components";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
// Import Swiper styles
import "styles/global.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
export default function RootLayout({ children }: any) {
  const customTheme = {
    button: {
      defaultProps: {
        variant: "filled",
        size: "md",
        color: "deep-orange",
        fullWidth: false,
        ripple: true,
        className: "",
      },
    },
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider value={customTheme}>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

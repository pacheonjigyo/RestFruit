import * as React from "react";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

import { Button, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { usePageEffect } from "../../core/page.js";

import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

import Image from "../../common/Image.js";
import { AppContext } from "../../stores/index.js";
import Brand from "./components/Brand.js";
import Ending from "./components/Ending.js";
import Hello from "./components/Hello.js";
import Intro from "./components/Intro.js";
import Special from "./components/Special.js";
import "./index.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function Main(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  usePageEffect({ title: "휴식과일" });

  return useObserver(() => (
    <>
      {commonStore.loadingStep < 3 ? (
        <Hello />
      ) : (
        <>
          <Intro />
          <Brand />
          <Special />
          <Ending />
        </>
      )}

      {commonStore.device === "desktop" || commonStore.device === "tablet" ? (
        <>
          <Button
            id="custom-button"
            sx={{
              borderRadius: "1rem",

              position: "fixed",
              right: 24,
              bottom: 24,

              zIndex: 99999,

              display: "block",
            }}
          >
            <Image src="/images/logo.svg" width={128} height={128} />

            <Typography
              color="black"
              sx={{
                mt: "-20px",
                fontSize: 20,
                fontFamily: "agchoijeongho-screen",
              }}
            >
              문의하기
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Button
            id="custom-button"
            sx={{
              borderRadius: "1rem",

              position: "fixed",
              right: 10,
              bottom: 10,

              zIndex: 99999,

              display: "block",
            }}
          >
            <Image src="/images/logo.svg" width={80} height={80} />

            <Typography
              color="black"
              sx={{
                mt: "-10px",
                fontSize: 16,
                fontFamily: "agchoijeongho-screen",
              }}
            >
              문의하기
            </Typography>
          </Button>
        </>
      )}
    </>
  ));
}

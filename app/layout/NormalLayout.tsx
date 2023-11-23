import AOS from "aos";
import * as React from "react";
import ScrollToTop from "../common/ScrollToTop.js";

import { Box, useMediaQuery } from "@mui/material";
import { useObserver } from "mobx-react";
import { Outlet } from "react-router-dom";
import { initEnvironment } from "../common/Environment.js";
import { AppContext } from "../stores/index.js";
import { BaseToolbar } from "./toolbar/BaseToolbar.js";

import "aos/dist/aos.css";

export function NormalLayout(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  const isDesktop = useMediaQuery("(min-width:1280px)");
  const isTablet = useMediaQuery("(min-width:768px)");

  commonStore.setDesktop(isDesktop);
  commonStore.setDevice(isDesktop ? "desktop" : isTablet ? "tablet" : "mobile");

  React.useEffect(() => {
    AOS.init({ once: true });

    initEnvironment(commonStore);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useObserver(() => (
    <React.Fragment>
      <ScrollToTop />

      <BaseToolbar />

      <Box
        sx={{
          display: "flex",
          flexDirection:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? "unset"
              : "column",
        }}
      >
        <Box
          sx={{
            width: commonStore.baseInfo.width,
            height: commonStore.baseInfo.height,
          }}
        >
          <React.Suspense>
            <Outlet />
          </React.Suspense>
        </Box>
      </Box>
    </React.Fragment>
  ));
}

import * as React from "react";

import { Box } from "@mui/material";
import { AppContext } from "../stores/index.js";

export const Manuscript = (props: any) => {
  const { commonStore } = React.useContext(AppContext);

  return (
    <Box
      {...props}
      sx={{
        ...props.sx,

        borderColor: props.sx.borderColor ? props.sx.borderColor : "#E55C5C",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          width:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? props.size === "small"
                ? 30
                : 64
              : 24,
          height:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? props.size === "small"
                ? 30
                : 64
              : 24,

          fontSize:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? props.size === "small"
                ? 24
                : 48
              : 18,
          fontFamily: "agchoijeongho-screen",

          animation:
            commonStore.loadingStep === 0 && props.value > 6
              ? "fade-out 1s ease 2s 1 normal forwards"
              : commonStore.loadingStep === 1 && props.value === 4
              ? "fade-in 1s ease 0s 1 normal forwards"
              : "unset",
        }}
        data-aos={props.value ? "fade-in" : "unset"}
        data-aos-delay={props.value ? props.value * 100 : 0}
      >
        {props.children}
      </Box>
    </Box>
  );
};

import * as React from "react";
import Image from "../../../common/Image.js";

import { Box, Container, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { usePageEffect } from "../../../core/page.js";
import { AppContext } from "../../../stores/index.js";

export default function Story(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  usePageEffect({ title: "브랜드 소개" });

  return useObserver(() => (
    <>
      <Box
        sx={{
          background: `url("/images/people-v3.jpg")`,
          backgroundSize: "cover",
          backgroundPosition:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? "0px 700px"
              : "740px 400px",
          backgroundAttachment: "fixed",

          width: "100%",
          height:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 400
              : 200,

          zIndex: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? "row"
                : "column",
            alignItems: "center",
            justifyContent: "center",

            height:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? 400
                : 200,
          }}
        >
          <Typography
            fontSize={
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? 50
                : 24
            }
            lineHeight={
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? "72px"
                : "36px"
            }
            color="white"
            sx={{
              textShadow: "1px 1px 2px #00000069",
              fontFamily: "NanumSquareNeo",
              fontWeight: 900,
            }}
            align={
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? "left"
                : "center"
            }
          >
            브랜드 소개
          </Typography>
        </Container>
      </Box>

      <Box
        id="brand-detail"
        sx={{
          width: "100%",
        }}
      >
        <Image
          src="/images/description-01.jpg"
          width={
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 860
              : "100%"
          }
        />

        <Image
          src="/images/description-02.jpg"
          width={
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 860
              : "100%"
          }
        />

        <Image
          src="/images/description-03.jpg"
          width={
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 860
              : "100%"
          }
        />

        <Image
          src="/images/description-04.jpg"
          width={
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 860
              : "100%"
          }
        />
      </Box>
    </>
  ));
}

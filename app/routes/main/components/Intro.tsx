import * as React from "react";

import { Box, Container, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import Image from "../../../common/Image.js";
import { Manuscript } from "../../../common/Manuscript.js";
import { usePageEffect } from "../../../core/page.js";
import { AppContext } from "../../../stores/index.js";

export default function Intro(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  usePageEffect({ title: "휴식과일" });

  return useObserver(() => (
    <>
      <Box
        sx={{
          background:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? `url("/images/background-pc.jpg")`
              : `url("/images/background-mobile.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          width: "100%",
          height: commonStore.baseInfo.height,

          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: commonStore.device === "desktop" ? 0 : "50%",
            top: commonStore.device === "desktop" ? "50%" : "50%",

            transform:
              commonStore.device === "desktop"
                ? "translate(0%, -50%)"
                : "translate(-50%, -50%)",

            width: "100%",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: commonStore.device === "desktop" ? "table" : "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderTop: 1,
                  borderColor: "#E55C5C",

                  mb: "6px",

                  width:
                    commonStore.device === "desktop"
                      ? "auto"
                      : commonStore.device === "tablet"
                      ? 649
                      : 249,
                }}
              ></Box>

              <Box
                sx={{
                  display: "flex",
                  mb: "6px",
                }}
              >
                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                ></Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                >
                  휴
                </Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                >
                  식
                </Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                >
                  과
                </Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                ></Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                >
                  일
                </Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                ></Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                >
                  사
                </Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                >
                  이
                </Manuscript>

                <Manuscript
                  sx={{
                    borderLeft: 1,
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                ></Manuscript>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  mb: "6px",
                }}
              >
                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                ></Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                >
                  과
                </Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                >
                  일
                </Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                >
                  하
                </Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                >
                  나
                </Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                ></Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                >
                  {/* <Image src="/images/orange.svg" height={56} /> */}
                  <Image
                    src="/images/orange.svg"
                    height={
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 48
                        : 24
                    }
                  />
                </Manuscript>

                <Manuscript
                  sx={{
                    border: 1,
                  }}
                  value={0}
                ></Manuscript>

                <Manuscript
                  sx={{
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                ></Manuscript>

                <Manuscript
                  sx={{
                    borderLeft: 1,
                    borderTop: 1,
                    borderBottom: 1,
                  }}
                  value={0}
                ></Manuscript>
              </Box>

              <Box
                sx={{
                  borderTop: 1,
                  borderColor: "#E55C5C",

                  width:
                    commonStore.device === "desktop"
                      ? "auto"
                      : commonStore.device === "tablet"
                      ? 649
                      : 249,
                }}
              ></Box>

              <Typography
                fontSize={
                  commonStore.device === "desktop"
                    ? 18
                    : commonStore.device === "tablet"
                    ? 18
                    : 12
                }
                align="center"
                sx={{
                  mt: 3,
                  fontFamily: "agchoijeongho-screen",
                  letterSpacing: 1.5,
                }}
              >
                {"<"}휴식과일{">"}은 {"‘"}유림청과{"’"}의 온라인스토어
                브랜드입니다.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  ));
}

import * as React from "react";

import { Box, Button } from "@mui/material";
import { useObserver } from "mobx-react";
import Image from "../../../common/Image.js";
import { Manuscript } from "../../../common/Manuscript.js";
import { usePageEffect } from "../../../core/page.js";
import { AppContext } from "../../../stores/index.js";

export default function Hello(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  usePageEffect({ title: "휴식과일" });

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "#fff9ec",

          width: commonStore.baseInfo.width,
          height: commonStore.baseInfo.height,

          position: "fixed",

          zIndex: 1000000000,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",

            transform: "translate(-50%, -50%)",

            animation:
              commonStore.loadingStep === 2
                ? "fade-out 1s ease 0s 1 normal forwards"
                : "unset",
          }}
        >
          <Box
            sx={{
              borderTop: 1,
              borderColor: "#E55C5C",

              mb: "6px",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              mb: "6px",
            }}
          >
            {commonStore.loadingText.slice(0, 10).map((v, i) => (
              <>
                <Manuscript
                  value={i}
                  sx={{
                    border:
                      i === 1 || i === 3 || i === 5 || i === 7 ? 1 : "unset",
                    borderTop:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderBottom:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderRight: i === 8 ? 1 : "auto",
                  }}
                >
                  {v === null ? (
                    <Image
                      src="/images/orange.svg"
                      height={
                        commonStore.device === "desktop" ||
                        commonStore.device === "tablet"
                          ? 48
                          : 24
                      }
                    />
                  ) : (
                    v
                  )}
                </Manuscript>
              </>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              mb: "6px",
            }}
          >
            {commonStore.loadingText.slice(10, 20).map((v, i) => (
              <>
                <Manuscript
                  value={10 + i}
                  sx={{
                    border:
                      i === 1 || i === 3 || i === 5 || i === 7 ? 1 : "unset",
                    borderTop:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderBottom:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderRight: i === 8 ? 1 : "auto",
                  }}
                >
                  {v === null ? (
                    <Image
                      src="/images/orange.svg"
                      height={
                        commonStore.device === "desktop" ||
                        commonStore.device === "tablet"
                          ? 48
                          : 24
                      }
                    />
                  ) : (
                    v
                  )}
                </Manuscript>
              </>
            ))}
          </Box>
          <Box
            sx={{
              borderTop: 1,
              borderColor: "#E55C5C",

              mt: "6px",
              mb: 10,
            }}
          ></Box>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              sx={{
                ml:
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 5
                    : 0,

                color: "white",
                fontSize:
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 18
                    : 12,

                width: 200,
                height:
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 40
                    : 30,
                borderRadius: "20px",
              }}
              onClick={() => {
                commonStore.setLoadingStep(3);
              }}
              data-aos="fade-in"
              data-aos-duration={1000}
              data-aos-delay={1000}
            >
              메인화면으로 이동
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  ));
}

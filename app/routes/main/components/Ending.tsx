import * as React from "react";
import Image from "../../../common/Image.js";

import { Box, Container, Grid, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { usePageEffect } from "../../../core/page.js";
import { AppContext } from "../../../stores/index.js";

export default function Ending(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  usePageEffect({ title: "휴식과일" });

  return useObserver(() => (
    <>
      <Box
        sx={{
          width: "100%",
          height:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 958
              : 1200,

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <Image src="/images/shadow-02.png" />
        </Box>

        <Typography
          fontSize={
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 60
              : 24
          }
          sx={{
            mb: "100px",
            fontFamily: "NanumSquareNeo",
            fontWeight: 800,
          }}
          onClick={() => {
            window.open(
              "https://urestfruit.channel.io",
              "_blank",
              "height=600,width=377,top=100,left=200,scrollbars=yes,resizable=yes",
            );
          }}
        >
          문의하기
        </Typography>

        <Box
          sx={{
            width: "100%",
            mb: "58px",
          }}
        >
          <Container maxWidth="lg">
            <Grid container>
              <Grid
                item
                xs={
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 3
                    : 6
                }
              >
                <Box
                  sx={{
                    borderBottom:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 0
                        : 2,
                    borderColor: "#F9D18C",
                    width: "100%",
                    height:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 170
                        : 200,

                    textAlign: "center",
                  }}
                >
                  <Image src="/images/position.svg" width="75px" />

                  <Typography
                    fontSize={
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 22
                        : 14
                    }
                    lineHeight="32px"
                    color="text.secondary"
                    sx={{
                      mt: "23px",
                      fontFamily: "NanumSquareNeo",
                    }}
                  >
                    울산 중구 서원 6길 4
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 3
                    : 6
                }
              >
                <Box
                  sx={{
                    borderLeft: 2,
                    borderBottom:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 0
                        : 2,
                    borderColor: "#F9D18C",
                    width: "100%",
                    height:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 170
                        : 200,

                    textAlign: "center",
                  }}
                >
                  <Image src="/images/phone.svg" width="75px" />

                  <Typography
                    fontSize={
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 22
                        : 14
                    }
                    lineHeight="32px"
                    color="text.secondary"
                    sx={{
                      mt: "23px",
                      fontFamily: "NanumSquareNeo",
                    }}
                  >
                    오전 09:00~18:00
                    <br />
                    tel. 052-294-4615
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 3
                    : 6
                }
              >
                <Box
                  sx={{
                    borderLeft:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 2
                        : 0,
                    borderColor: "#F9D18C",
                    width: "100%",
                    height:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 170
                        : 200,

                    textAlign: "center",
                  }}
                >
                  <Image src="/images/mail.svg" width="75px" />

                  <Typography
                    fontSize={
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 22
                        : 14
                    }
                    lineHeight="32px"
                    color="text.secondary"
                    sx={{
                      mt: "23px",
                      fontFamily: "NanumSquareNeo",
                    }}
                  >
                    urestfruit@naver.com
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 3
                    : 6
                }
              >
                <Box
                  sx={{
                    borderLeft: 2,
                    borderColor: "#F9D18C",
                    width: "100%",
                    height:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 170
                        : 200,

                    textAlign: "center",
                  }}
                >
                  <Image src="/images/clock.svg" width="75px" />

                  <Typography
                    fontSize={
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 22
                        : 14
                    }
                    lineHeight="32px"
                    color="text.secondary"
                    sx={{
                      mt: "23px",
                      fontFamily: "NanumSquareNeo",
                    }}
                  >
                    9시~20시
                    <br />
                    일요일 휴무
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: "absolute",
            left: "50%",
            bottom:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? "-50%"
                : "-40%",
            transform: "translate(-50%, -40%)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12982.677054057753!2d129.3378152!3d35.5618696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567ccdee21d1415%3A0x4d5ca1f76169fd7e!2z7Jyg66a87LKt6rO8!5e0!3m2!1sko!2skr!4v1693878853249!5m2!1sko!2skr"
            width="100%"
            height="500"
            style={{ border: 0, boxShadow: "0px 3px 6px #00000029" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            data-aos="fade-up"
            data-aos-offset={-500}
            data-aos-duration={1500}
          ></iframe>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "#F9D18C",
          width: "100%",
          height: 613,

          p: 10,

          display: "flex",
          alignItems: "end",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              width: "100%",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",

                  width:
                    commonStore.device === "desktop" ||
                    commonStore.device === "tablet"
                      ? 500
                      : commonStore.baseInfo.width,

                  mb: "44px",
                }}
              >
                {/* <Button
                  color="info"
                  sx={{
                    fontSize: 22,
                    mr: 3,
                  }}
                >
                  회사소개
                </Button>

                <Button
                  color="info"
                  sx={{
                    fontSize: 22,
                    mr: 3,
                  }}
                >
                  이용약관
                </Button>

                <Button
                  color="info"
                  sx={{
                    fontSize: 22,
                    mr: 3,
                  }}
                >
                  개인정보처리방침
                </Button> */}
              </Box>

              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",

                  mb: 3,
                }}
              >
                <Typography color="white" fontSize={14}>
                  휴식과일 | 울산 중구 서원 6길 4
                  <br />
                  (우) 44510 | TEL 052-294-4615
                  <br />
                  대표: 이덕우 | 사업자등록번호: 620-90-39294
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 3,
                display: "flex",
              }}
            >
              <Image
                src="/images/orange-white.svg"
                height={commonStore.device === "desktop" ? 64 : 32}
                style={{
                  cursor: "pointer",

                  border: 1,
                  borderColor: "white",
                }}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  ));
}

import * as React from "react";
import Image from "../../../common/Image.js";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { Manuscript } from "../../../common/Manuscript.js";
import { usePageEffect } from "../../../core/page.js";
import { AppContext } from "../../../stores/index.js";

export default function Brand(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);
  const navigate = useNavigate();

  usePageEffect({ title: "휴식과일" });

  return useObserver(() => (
    <>
      <Box
        id="brand-detail"
        sx={{
          width: "100%",
          height:
            commonStore.device === "desktop" || commonStore.device === "tablet"
              ? 1200
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
          <Image src="/images/shadow.png" />
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",

              top: "50%",
              left: 0,

              transform: "translate(-100%, -50%)",

              display: "flex",
            }}
          >
            <Box
              sx={{
                mr: "6px",

                borderRight: 1,
                borderColor: "#E55C5C",
              }}
            ></Box>

            <Box
              sx={{
                mr: "6px",
              }}
            >
              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              >
                달
              </Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              >
                콤
              </Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              >
                함
              </Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              >
                <Image src="/images/orange.svg" height={48} />
              </Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  borderTop: 1,
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>
            </Box>

            <Box>
              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              ></Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              >
                휴
              </Manuscript>

              <Manuscript
                sx={{
                  border: 1,
                }}
                value={0}
              >
                식
              </Manuscript>

              <Manuscript
                sx={{
                  borderLeft: 1,
                  borderRight: 1,

                  justifyContent: "left",
                }}
                value={0}
              >
                ,
              </Manuscript>

              <Manuscript
                sx={{
                  borderTop: 1,
                  borderLeft: 1,
                  borderRight: 1,
                }}
                value={0}
              ></Manuscript>
            </Box>

            <Box
              sx={{
                ml: "6px",

                borderLeft: 1,
                borderColor: "#E55C5C",
              }}
            ></Box>
          </Box>

          <Grid container spacing={"73px"}>
            <Grid
              item
              xs={
                commonStore.device === "desktop" ||
                commonStore.device === "tablet"
                  ? 6
                  : 12
              }
            >
              <Box
                sx={
                  {
                    // bgcolor: "White",
                    // p: 3,
                  }
                }
              >
                <img
                  src="/images/apple-v2.jpg"
                  width="100%"
                  height={
                    commonStore.device === "desktop" ||
                    commonStore.device === "tablet"
                      ? "640px"
                      : "300px"
                  }
                  style={{
                    borderRadius: 4,

                    objectFit: "cover",
                    objectPosition: "35%",
                  }}
                  data-aos-delay={0}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={
                commonStore.device === "desktop" ||
                commonStore.device === "tablet"
                  ? 6
                  : 12
              }
            >
              <Box
                sx={{
                  textAlign: "center",
                  // mt: "27px",
                  mb: "70px",
                }}
              >
                <Image src="/images/logo.svg" width={160} height={160} />

                <Typography
                  color="primary"
                  fontSize={
                    commonStore.device === "desktop" ||
                    commonStore.device === "tablet"
                      ? "34px"
                      : "24px"
                  }
                  fontFamily={"agchoijeongho-screen"}
                  sx={{
                    mt: "-20px",
                  }}
                >
                  휴식과일
                </Typography>
              </Box>

              <Box
                sx={{
                  mb: "64px",
                }}
              >
                <Typography
                  color="text.secondary"
                  style={{
                    fontSize:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? "22px"
                        : "14px",
                    lineHeight:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? "41px"
                        : "30px",
                    fontFamily: "NotoSansKR",
                  }}
                  align={
                    commonStore.device === "desktop" ||
                    commonStore.device === "tablet"
                      ? "left"
                      : "center"
                  }
                >
                  {commonStore.device === "desktop" ||
                  commonStore.device === "tablet" ? (
                    <>
                      일상생활에 지쳐 휴식과 일의 균형을 잃어 버리셨나요?
                      <br />
                      휴식과 일이 적절하게 알맞은 시기에 이루어졌을 때 최고의
                      효율을 가져온답니다. 40년동안 주변 주민분들과 상인들에게
                      휴식을선사했다면 이제는 더욱 많은 사람들의 삶에 알맞고 잘
                      익은 과일로 달콤한 휴식, 향기로운 휴식을 선물해 일상생활의
                      최고의 컨디션을 선사해드리고자 합니다.
                    </>
                  ) : (
                    <>
                      일상생활에 지쳐
                      <br />
                      휴식과 일의 균형을 잃어 버리셨나요?
                      <br />
                      <br />
                      휴식과 일이 적절하게 알맞은 시기에
                      <br />
                      이루어졌을 때 최고의 효율을 가져온답니다.
                      <br />
                      <br />
                      40년 동안 주변 주민분들과 상인들에게
                      <br />
                      휴식을 선사했다면 이제는 더욱 많은 사람들의
                      <br />
                      삶에 알맞고 잘 익은 과일로 달콤한 휴식,
                      <br />
                      향기로운 휴식을 선물해 일상생활의
                      <br />
                      최고의 컨디션을 선사해드리고자 합니다.
                    </>
                  )}
                </Typography>
              </Box>

              <Box
                sx={{
                  textAlign:
                    commonStore.device === "desktop" ||
                    commonStore.device === "tablet"
                      ? "right"
                      : "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "white",

                    width: 180,
                    height: 60,
                    fontSize:
                      commonStore.device === "desktop" ||
                      commonStore.device === "tablet"
                        ? 18
                        : 14,
                  }}
                  onClick={() => {
                    navigate("/brand");
                  }}
                >
                  브랜드 스토리
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            position: "absolute",

            left: 0,
            bottom:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? "-40%"
                : -150,

            transform: "translate(0%, -50%)",

            zIndex: 1,
          }}
        >
          <Image src="/images/line-01.png" width="100%" />
        </Box>
      </Box>
    </>
  ));
}

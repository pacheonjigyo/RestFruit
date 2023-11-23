import * as React from "react";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import Image from "../../../common/Image.js";
import { usePageEffect } from "../../../core/page.js";
import { AppContext } from "../../../stores/index.js";

export default function Special(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  usePageEffect({ title: "휴식과일" });

  return useObserver(() => (
    <>
      <Box
        id="brand-special"
        sx={{
          width: "100%",
          // height: commonStore.baseInfo.height,

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          position: "relative",
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFF1D9",
            width: "100%",
            height:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? 771
                : 1800,

            textAlign: "center",

            position: "relative",
          }}
        >
          <Typography
            sx={{
              mt: "117px",
              mb: "30px",

              fontSize:
                commonStore.device === "desktop" ||
                commonStore.device === "tablet"
                  ? 60
                  : 24,
              fontFamily: "NanumSquareNeo",
              fontWeight: 800,
            }}
          >
            휴식과일의 특별함
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              fontSize:
                commonStore.device === "desktop" ||
                commonStore.device === "tablet"
                  ? 24
                  : 14,
            }}
          >
            {commonStore.device === "desktop" ||
            commonStore.device === "tablet" ? (
              <>이제는 달콤한 휴식을 취해야할 때, 휴식과일과 함께 하세요.</>
            ) : (
              <>
                이제는 달콤한 휴식을 취해야할 때,
                <br />
                휴식과일과 함께 하세요.
              </>
            )}
          </Typography>

          <Container
            maxWidth="lg"
            sx={{
              position: "absolute",
              top: 771,
              left: "50%",
              transform: "translate(-50%, -420px)",
            }}
          >
            {commonStore.device === "desktop" ||
            commonStore.device === "tablet" ? (
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      boxShadow: "5px 0px 7px #00000038",
                    }}
                    data-aos-offset={-500}
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={0}
                  >
                    <Image
                      src="/images/select-v2.jpg"
                      width="100%"
                      height={420}
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        bgcolor: "#F5F5F5",

                        borderBottomLeftRadius: "14px",
                        borderBottomRightRadius: "14px",

                        width: "100%",
                        height: 207,
                        p: "22px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontSize={26}
                        sx={{
                          mb: "22px",
                          fontFamily: "NanumSquareNeo",
                          fontWeight: 800,
                        }}
                      >
                        당도선별
                      </Typography>

                      <Typography
                        fontSize={18}
                        color="text.secondary"
                        sx={{
                          lineHeight: "32px",
                          fontFamily: "NanumSquareNeo",
                        }}
                      >
                        40년 경력과 노하우로
                        <br />
                        과일을 선별합니다.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box
                    sx={{
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      boxShadow: "5px 0px 7px #00000038",
                    }}
                    data-aos-offset={-500}
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <Image
                      src="/images/custom-v3.jpg"
                      width="100%"
                      height={420}
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        bgcolor: "#F5F5F5",

                        borderBottomLeftRadius: "14px",
                        borderBottomRightRadius: "14px",

                        width: "100%",
                        height: 207,
                        p: "22px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontSize={26}
                        sx={{
                          mb: "22px",
                          fontFamily: "NanumSquareNeo",
                          fontWeight: 800,
                        }}
                      >
                        맞춤형 과일 제공
                      </Typography>

                      <Typography
                        fontSize={18}
                        color="text.secondary"
                        sx={{
                          lineHeight: "32px",
                          fontFamily: "NanumSquareNeo",
                        }}
                      >
                        상황별, 계절별, 개인 맞춤 특화형
                        <br />
                        과일 추천 프로그램을 통해
                        <br />
                        과일을 제안드립니다.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box
                    sx={{
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      boxShadow: "5px 0px 7px #00000038",
                    }}
                    data-aos-offset={-500}
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={600}
                  >
                    <Image
                      src="/images/eco-v3.jpg"
                      width="100%"
                      height={420}
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        bgcolor: "#F5F5F5",
                        borderBottomLeftRadius: "14px",
                        borderBottomRightRadius: "14px",

                        width: "100%",
                        height: 207,
                        p: "22px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontSize={26}
                        sx={{
                          mb: "22px",
                          fontFamily: "NanumSquareNeo",
                          fontWeight: 800,
                        }}
                      >
                        친환경적
                      </Typography>

                      <Typography
                        fontSize={18}
                        color="text.secondary"
                        sx={{
                          lineHeight: "32px",
                          fontFamily: "NanumSquareNeo",
                        }}
                      >
                        환경까지 고려한 100%
                        <br />
                        친환경 포장재를 사용합니다.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      boxShadow: "5px 0px 7px #00000038",
                      position: "relative",
                    }}
                    data-aos-offset={-500}
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={0}
                  >
                    <Image
                      src="/images/select-v2.jpg"
                      width="100%"
                      height={420}
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",

                        // bgcolor: "#F5F5F5",

                        color: "white",

                        borderBottomLeftRadius: "14px",
                        borderBottomRightRadius: "14px",

                        width: "100%",
                        height: 170,
                        p: "22px",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        fontSize={24}
                        sx={{
                          mb: "22px",
                          fontFamily: "NanumSquareNeo",
                          fontWeight: 800,
                          textShadow: "1px 1px 2px #00000069",
                        }}
                      >
                        당도선별
                      </Typography>

                      <Typography
                        fontSize={14}
                        // color="text.secondary"
                        sx={{
                          lineHeight: "24px",
                          fontFamily: "NanumSquareNeo",
                          textShadow: "1px 1px 2px #00000069",
                        }}
                      >
                        40년 경력과 노하우로
                        <br />
                        과일을 선별합니다.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      boxShadow: "5px 0px 7px #00000038",
                      position: "relative",
                    }}
                    data-aos-offset={-500}
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={0}
                  >
                    <Image
                      src="/images/custom-v3.jpg"
                      width="100%"
                      height={420}
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",

                        // bgcolor: "#F5F5F5",
                        color: "white",

                        borderBottomLeftRadius: "14px",
                        borderBottomRightRadius: "14px",

                        width: "100%",
                        height: 170,
                        p: "22px",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        fontSize={24}
                        sx={{
                          mb: "22px",
                          fontFamily: "NanumSquareNeo",
                          fontWeight: 800,
                          textShadow: "1px 1px 2px #00000069",
                        }}
                      >
                        맞춤형 과일 제공
                      </Typography>

                      <Typography
                        fontSize={14}
                        // color="text.secondary"
                        sx={{
                          lineHeight: "24px",
                          fontFamily: "NanumSquareNeo",
                          textShadow: "1px 1px 2px #00000069",
                        }}
                      >
                        상황별, 계절별, 개인 맞춤 특화형
                        <br />
                        과일 추천 프로그램을 통해
                        <br />
                        과일을 제안드립니다.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      boxShadow: "5px 0px 7px #00000038",
                      position: "relative",
                    }}
                    data-aos-offset={-500}
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={0}
                  >
                    <Image
                      src="/images/eco-v3.jpg"
                      width="100%"
                      height={420}
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",

                        // bgcolor: "#F5F5F5",
                        color: "white",

                        borderBottomLeftRadius: "14px",
                        borderBottomRightRadius: "14px",

                        width: "100%",
                        height: 170,
                        p: "22px",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        fontSize={24}
                        sx={{
                          mb: "22px",
                          fontFamily: "NanumSquareNeo",
                          fontWeight: 800,
                          textShadow: "1px 1px 2px #00000069",
                        }}
                      >
                        친환경적
                      </Typography>

                      <Typography
                        fontSize={14}
                        // color="text.secondary"
                        sx={{
                          lineHeight: "24px",
                          fontFamily: "NanumSquareNeo",
                          textShadow: "1px 1px 2px #00000069",
                        }}
                      >
                        환경까지 고려한 100%
                        <br />
                        친환경 포장재를 사용합니다.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Container>
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            width: "100%",
            height: 260,
          }}
        ></Box>

        <Box
          sx={{
            bgcolor: "white",
            width: "100%",
            height:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? 300
                : 0,

            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",

              left: 0,
              bottom:
                commonStore.device === "desktop" ||
                commonStore.device === "tablet"
                  ? -130
                  : 100,

              transform: "translate(0%, 0%)",

              // zIndex: 1,
            }}
          >
            <Image src="/images/line-02.png" width="100%" />
          </Box>
        </Box>

        <Box
          sx={{
            background: `url("/images/people-v3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? "center"
                : "740px",
            backgroundAttachment: "fixed",

            width: "100%",
            height:
              commonStore.device === "desktop" ||
              commonStore.device === "tablet"
                ? 400
                : 600,

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
              justifyContent:
                commonStore.device === "desktop" ||
                commonStore.device === "tablet"
                  ? "space-between"
                  : "center",

              height:
                commonStore.device === "desktop" ||
                commonStore.device === "tablet"
                  ? 400
                  : 600,
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
              당신과 당신의 가족을 위해
              <br />
              엄선해서 선택하여 판매합니다.
            </Typography>

            <Button
              color="info"
              variant="outlined"
              sx={{
                mt:
                  commonStore.device === "desktop" ||
                  commonStore.device === "tablet"
                    ? 0
                    : 3,
                border: "2px solid #FFFFFF",
                borderRadius: "40px",
                boxShadow: "0px 3px 6px #00000029",

                fontSize: 22,
                fontFamily: "NanumSquareNeo",
                width: 220,
                height: 80,
              }}
              onClick={() => {
                window.open("https://smartstore.naver.com/urestfruit");
              }}
            >
              스토어 바로가기
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  ));
}

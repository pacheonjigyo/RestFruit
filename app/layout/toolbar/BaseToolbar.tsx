import * as React from "react";

import { useObserver } from "mobx-react";
import { AppContext } from "../../stores/index.js";

import { Menu } from "@mui/icons-material";
import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "../../common/Image.js";
import { Manuscript } from "../../common/Manuscript.js";
import { initToolbarEvent } from "../../common/ToolbarEvent.js";
import { MenuPopOver } from "../popover/MenuPopOver.js";

export function BaseToolbar(props: AppToolbarProps): JSX.Element {
  const navigate = useNavigate();

  const { commonStore } = React.useContext(AppContext);
  const { sx, ...other } = props;

  const elRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    initToolbarEvent(commonStore, elRef);
    // commonStore.setHeaderElem(elRef);
  });

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",

          // borderBottom: 1,
          // borderColor: "divider",
        }}
      >
        {/* <Drawer
        anchor={"top"}
        open={commonStore.drawerAppState}
        onClose={() => {
          commonStore.setDrawerAppState(false);
        }}
      >
        <Box
          sx={{
            width: commonStore.baseInfo.width,
          }}
          role="presentation"
        >
          <List
            sx={{
              p: 1,
            }}
          >
            <ListItem key={"language"} disablePadding>
              <Select
                value={commonStore.appInfo.language}
                fullWidth
                onChange={(e) => {
                  commonStore.setAppInfo({
                    ...commonStore.appInfo,

                    language: e.target.value,
                  });
                }}
              >
                <MenuItem value="en">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    English
                  </Box>
                </MenuItem>
                <MenuItem value="ko">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    한국어
                  </Box>
                </MenuItem>
              </Select>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem key={"home"} disablePadding>
              <ListItemButton href="/" component={NavLink}>
                <ListItemText primary={"HOME"} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem key={"work"} disablePadding>
              <ListItemButton href="/branding/artwork" component={NavLink}>
                <ListItemText primary={"WORK"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"information"} disablePadding>
              <ListItemButton href="/info" component={NavLink}>
                <ListItemText primary={"INFO"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"about"} disablePadding>
              <ListItemButton href="/about" component={NavLink}>
                <ListItemText primary={"ABOUT"} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem key={"login"} disablePadding>
              <ListItemButton href="/login/user" component={NavLink}>
                <ListItemText
                  primary={wordList["로그인"][commonStore.appInfo.language]}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer> */}

        <AppBar
          ref={elRef}
          sx={{
            boxShadow: "none",
            bgcolor: "transparent",
            mt: commonStore.device === "mobile" ? 0 : "27px",

            height: 67,
          }}
          style={
            {
              // animation: "exit 0.0s ease 0s 1 normal forwards",
            }
          }
        >
          <Container
            maxWidth="lg"
            sx={{
              height: 67,
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <Box
                  sx={{
                    height: 67,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  {commonStore.device === "mobile" ? (
                    <IconButton
                      ref={menuRef}
                      sx={{
                        mr: 1,
                      }}
                      onClick={() => {
                        commonStore.setMenuPopOver(true);
                      }}
                    >
                      <Menu />
                    </IconButton>
                  ) : null}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <Manuscript
                      size="small"
                      sx={{
                        border: 1,
                      }}
                    >
                      휴
                    </Manuscript>
                    <Manuscript
                      size="small"
                      sx={{
                        borderTop: 1,
                        borderBottom: 1,
                      }}
                    >
                      식
                    </Manuscript>
                    <Manuscript
                      size="small"
                      sx={{
                        border: 1,
                      }}
                    >
                      과
                    </Manuscript>
                    <Manuscript
                      size="small"
                      sx={{
                        borderTop: 1,
                        borderBottom: 1,
                      }}
                    >
                      <Image src="/images/orange.svg" height={24} />
                    </Manuscript>
                    <Manuscript
                      size="small"
                      sx={{
                        border: 1,
                      }}
                    >
                      일
                    </Manuscript>
                  </Box>

                  {commonStore.device === "desktop" ||
                  commonStore.device === "tablet" ? (
                    <>
                      <Button
                        color="secondary"
                        sx={{
                          ml:
                            commonStore.device === "desktop" ||
                            commonStore.device === "tablet"
                              ? 5
                              : 1,
                          fontSize:
                            commonStore.device === "desktop" ||
                            commonStore.device === "tablet"
                              ? 18
                              : 12,
                          mx: 5,
                        }}
                        onClick={() => {
                          const location: any =
                            document.querySelector("#brand-detail");

                          if (!location) {
                            return;
                          }

                          navigate("/brand");
                        }}
                      >
                        브랜드
                      </Button>

                      {/* <Button
                      color="secondary"
                      sx={{
                        fontSize:
                          commonStore.device === "desktop" ||
                          commonStore.device === "tablet"
                            ? 18
                            : 12,
                        mx: 5,
                      }}
                      onClick={() => {
                        const location: any =
                          document.querySelector("#brand-special");

                        if (!location) {
                          return;
                        }

                        window.scrollTo({
                          top: location.offsetTop,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      명칭 특징
                    </Button> */}

                      {commonStore.device === "desktop" ||
                      commonStore.device === "tablet" ? (
                        <>
                          <Button
                            color="secondary"
                            sx={{
                              fontSize:
                                commonStore.device === "desktop" ||
                                commonStore.device === "tablet"
                                  ? 18
                                  : 12,
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
                          </Button>
                        </>
                      ) : null}
                    </>
                  ) : null}
                </Box>
              </Grid>

              {/* <Grid item xs={1}>
              <Box
                sx={{
                  height: 67,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {commonStore.device === "desktop" || commonStore.device === "tablet" ? (
                  <Image
                    src="/images/logo.svg"
                    height={commonStore.device === "desktop" || commonStore.device === "tablet" ? 67 : 48}
                  />
                ) : null}
              </Box>
            </Grid> */}

              <Grid item xs={4}>
                <Box
                  sx={{
                    height: 67,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
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

                      width: 150,
                      height:
                        commonStore.device === "desktop" ||
                        commonStore.device === "tablet"
                          ? 40
                          : 30,
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      window.open("https://smartstore.naver.com/urestfruit");
                    }}
                  >
                    공식 스토어
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>

      <MenuPopOver menuRef={menuRef} />
    </>
  ));
}

type AppToolbarProps = Omit<AppBarProps, "children">;

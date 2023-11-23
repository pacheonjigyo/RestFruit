import * as React from "react";

import { useObserver } from "mobx-react";
import { AppContext } from "../../stores/index.js";

import {
  Box,
  Divider,
  List,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MenuPopOver(props): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  const navigate = useNavigate();

  return useObserver(() => (
    <>
      <Popover
        id={"mypage"}
        open={commonStore.menuPopOver}
        anchorEl={props.menuRef.current}
        onClose={() => {
          commonStore.setMenuPopOver(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: 200,
          }}
        >
          <List
            sx={{
              p: 0,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate("/");
              }}
            >
              <Typography fontSize={12} fontFamily="agchoijeongho-screen">
                휴식과일
              </Typography>
            </ListItemButton>

            <Divider />

            <ListItemButton
              onClick={() => {
                navigate("/brand");
              }}
            >
              <Typography fontSize={12} fontFamily="agchoijeongho-screen">
                브랜드
              </Typography>
            </ListItemButton>

            <Divider />

            <ListItemButton
              onClick={() => {
                window.open(
                  "https://urestfruit.channel.io",
                  "_blank",
                  "height=600,width=377,top=100,left=200,scrollbars=yes,resizable=yes",
                );
              }}
            >
              <Typography fontSize={12} fontFamily="agchoijeongho-screen">
                문의하기
              </Typography>
            </ListItemButton>
          </List>

          <Divider />
        </Box>
      </Popover>
    </>
  ));
}

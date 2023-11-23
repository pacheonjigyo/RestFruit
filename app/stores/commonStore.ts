import { makeAutoObservable, runInAction } from "mobx";
import { sleep } from "../common/Functions.js";
import { BaseInfo } from "../types.js";

export class commonStore {
  constructor() {
    makeAutoObservable(this);

    this.initLoadingText();
  }

  loadingText = new Array(20).fill("");
  loadingStep = 0;

  appInfo = {
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",

    accessToken: "",
    refreshToken: "",

    isAdmin: false,

    language: "ko",
    // language:
    //   navigator.language === "ko" || navigator.language === "ko-KR"
    //     ? "ko"
    //     : navigator.language === "en" || navigator.language === "en-US"
    //     ? "en"
    //     : "ko",
  };

  baseInfo = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  device = "desktop";

  isDesktop = false;

  headerElem: any = null;

  menuPopOver = false;

  setMenuPopOver = (value: boolean) => {
    this.menuPopOver = value;
  };

  initLoadingText = async () => {
    this.loadingStep = 0;

    for (let i = 0; i < this.loadingText.length; i++) {
      if (this.loadingStep === 3) {
        return;
      }

      runInAction(() => {
        if (i === 1) {
          this.loadingText[i] = "휴";
        }

        if (i === 2) {
          this.loadingText[i] = "식";
        }

        if (i === 3) {
          this.loadingText[i] = "과";
        }

        if (i === 5) {
          this.loadingText[i] = "일";
        }

        if (i === 7) {
          this.loadingText[i] = "사";
        }

        if (i === 8) {
          this.loadingText[i] = "이";
        }

        if (i === 11) {
          this.loadingText[i] = "과";
        }

        if (i === 12) {
          this.loadingText[i] = "일";
        }

        if (i === 13) {
          this.loadingText[i] = "하";
        }

        if (i === 14) {
          this.loadingText[i] = "나";
        }
      });

      if (i === 9) {
        await sleep(100 * 1);
      } else {
        await sleep(100 * 1);
      }
    }

    for (let i = 0; i < 10; i++) {
      if (this.loadingStep === 3) {
        return;
      }

      await sleep(100 * 1);
    }

    runInAction(() => {
      if (this.loadingStep === 3) {
        return;
      }

      this.loadingStep = 1;
      this.loadingText = this.loadingText.map((v, i) => {
        if (i >= 6) {
          return "";
        } else {
          if (i === 4) {
            return null;
          } else {
            return v;
          }
        }
      });
    });

    for (let i = 0; i < 10; i++) {
      if (this.loadingStep === 3) {
        return;
      }

      await sleep(100 * 1);
    }

    runInAction(() => {
      if (this.loadingStep === 3) {
        return;
      }

      this.loadingStep = 2;
    });

    for (let i = 0; i < 10; i++) {
      if (this.loadingStep === 3) {
        return;
      }

      await sleep(100 * 1);
    }

    runInAction(() => {
      this.loadingStep = 3;
    });
  };

  setLoadingStep = (value: number) => {
    this.loadingStep = value;
  };

  setHeaderElem = (value: any) => {
    this.headerElem = value;
  };

  setBaseInfo = (value: BaseInfo) => {
    this.baseInfo = value;
  };

  setDevice = (value: string) => {
    this.device = value;
  };

  setDesktop = (value: boolean) => {
    this.isDesktop = value;

    if (value) {
      document.documentElement.style.setProperty(
        "--swiper-pagination-bullet-size",
        "20px",
      );

      document.documentElement.style.setProperty(
        "--swiper-pagination-margin-size",
        "40px",
      );
    } else {
      document.documentElement.style.setProperty(
        "--swiper-pagination-bullet-size",
        "10px",
      );

      document.documentElement.style.setProperty(
        "--swiper-pagination-margin-size",
        "0px",
      );
    }
  };
}

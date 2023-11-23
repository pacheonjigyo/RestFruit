import { createBrowserRouter } from "react-router-dom";
import { RootError } from "../layout/error/RootError.js";
import { NormalLayout } from "../layout/NormalLayout.js";
import Story from "./main/components/Story.js";

import Main from "./main/Main.js";

export const router = createBrowserRouter([
  {
    path: "",
    element: <NormalLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Main /> },
      { path: "brand", element: <Story /> },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store.js";
import { router } from "./routes.jsx";

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'orange',
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Move Provider here */}
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </StrictMode>
);

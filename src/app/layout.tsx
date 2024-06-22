"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "../redux/store";
import theme from "../styles/theme";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <title>FilmFinder</title>
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Provider>
    </body>
  </html>
);

export default RootLayout;

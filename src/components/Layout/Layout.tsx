import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Header, Footer } from "./";
import { theme } from "../../styles/theme";

type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: "100vh", display: "flex", flexFlow: "column" }}>
          <Header />
          <Box
            component="main"
            sx={{ flexGrow: "1", "> div": { paddingTop: "7vh" } }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

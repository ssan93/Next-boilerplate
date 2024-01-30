import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { scrollToSection } from "../utils";

export const Landing = () => {
  return (
    <Box
      sx={{
        // background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/landing.png)`,
        height: "93vh",
        color: "white",
      }}
    >
      {/* <StaticImage
        src="../images/landing.png"
        alt=""
        className="landing-image"
      ></StaticImage> */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: "0 0 0 0",
          background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
          zIndex: "-1",
        }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 3,
          height: "80%",
        }}
        className="animate-slideUp"
      >
        <Typography
          variant="h2"
          sx={{ paddingTop: "50px", fontWeight: "bold" }}
        >
          Unlock Your Digital Potential with Customized Web Solutions
        </Typography>
        <Typography variant="h6">
          We are 7web Consulting, dedicated to providing the best service to our
          customers.
        </Typography>
        <Button
          onClick={() => scrollToSection(1)}
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Start Exploring
        </Button>
        {/* <a href="#test">test</a> */}
      </Container>
    </Box>
  );
};

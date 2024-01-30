import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { scrollToSection } from "../utils";

export const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        // height: "86vh",
        padding: "7vh",
        color: "white",
      }}
    >
      {/* <StaticImage
        src="../images/landing.png"
        alt=""
        className="contact-image"
      ></StaticImage> */}
      <Box
        sx={{
          width: "100%",
          height: "500px",
          position: "absolute",
          left: "0",
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
          Interested in 7web Consulting ?
        </Typography>
        <Typography variant="h6">
          Don't miss the opportunity and contact us to work together !
        </Typography>
        <Button
          onClick={() =>
            window.open(
              "mailto:7webconsulting@gmail.com?subject=Business Inquiry&body=Hello 7web Consulting,"
            )
          }
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Contact us
        </Button>
      </Container>
    </Box>
  );
};

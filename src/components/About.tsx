import React from "react";
import { Box } from "@mui/system";
import { CardMedia, Container, Typography } from "@mui/material";
import { theme } from "../styles/theme";

export const About = () => {
  return (
    <Box
      id="about"
      sx={{
        padding: "7vh 7vw",
        display: "flex",
        flexDirection: { xxs: "column-reverse", md: "row" },
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <StaticImage
        src="../images/about.jpeg"
        alt="About Image"
        placeholder="blurred"
        className="home-image"
      ></StaticImage> */}
      <Box
        sx={{
          padding: "3vw",
          width: { md: "40vw" },
          textAlign: "justify",
          marginBottom: { xxs: "40px", md: "0px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            margin: "20px",
            color: theme.palette.primary.main,
            fontWeight: "500",
          }}
        >
          About us
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          At 7web Consulting, we are a dynamic team of web development
          specialists. We take pride in transforming your digital concepts into
          stunning, functional websites that captivate your audience.
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          Our ethos is simple: Your vision is our mission. We are dedicated to
          creating unique web solutions that address your specific needs,
          pushing the boundaries of innovation with every project.
        </Typography>
        <Typography variant="h6">
          Partner with us to elevate your online presence and bring your digital
          aspirations to life.
        </Typography>
      </Box>
    </Box>
  );
};

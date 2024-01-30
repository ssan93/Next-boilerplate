import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { theme } from "../styles/theme";

export const KPIs = () => {
  return (
    <Box
      sx={{
        padding: "7vh 0",
        background: theme.palette.primary.main,
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "600", margin: "24px" }}>
        Tracking Success with Key Metrics
      </Typography>
      <Typography
        variant="h6"
        sx={{ maxWidth: "1250px", marginX: "auto", paddingX: "24px" }}
      >
        Even as a new company, we're committed to measurable excellence. With a
        focus on prompt response times, on-time project delivery, and a growing
        portfolio of successful launches, we're setting the standard for quality
        in web development.
      </Typography>
      <Box
        sx={{
          display: "flex",
          maxWidth: "800px",
          marginX: "auto",
          marginTop: "24px",
          flexWrap: "wrap",
        }}
      >
        <Container
          sx={{
            padding: "20px",
            width: "200px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "900" }}>
            4+
          </Typography>
          <Typography>Years of Experience</Typography>
        </Container>

        <Container
          sx={{
            padding: "20px",
            width: "200px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "900" }}>
            10+
          </Typography>
          <Typography>Website Launches</Typography>
        </Container>

        <Container
          sx={{
            padding: "20px",
            width: "200px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "900" }}>
            100%
          </Typography>
          <Typography>Client Satisfaction</Typography>
        </Container>
      </Box>
    </Box>
  );
};

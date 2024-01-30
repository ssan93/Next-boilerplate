import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { theme } from "../styles/theme";
import { FadersHorizontal, ShieldCheck, Headset } from "@phosphor-icons/react";

export const Features = () => {
  return (
    <Box
      sx={{
        padding: "7vh 7vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 3,
          height: "80%",
        }}
      >
        <Typography variant="h2" sx={{ paddingTop: "50px", fontWeight: "600" }}>
          Amazing{" "}
          <span style={{ color: theme.palette.primary.main }}>Features</span>
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Driven by our unwavering commitment, we propel your success forward
          with custom made solutions and steadfast support
        </Typography>
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: { xxs: 200, xs: 300, sm: 400 },
              border: "none",
              boxShadow: "none",
              background: "none",
            }}
          >
            <CardContent sx={{ display: "flex" }}>
              <Box
                sx={{
                  flexShrink: 0,
                  borderRadius: "9999px",
                  border: "1px solid rgb(206, 212, 220)",
                  padding: "1rem",
                  textAlign: "center",
                  height: "100%",
                  display: { xxs: "none", xs: "block" },
                }}
              >
                <ShieldCheck size={32} weight="fill" color="blue" />
              </Box>
              <Container>
                <Typography variant="h5" fontWeight={500} gutterBottom>
                  Secure
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Fortify your digital presence with our cutting-edge security
                  measures.
                </Typography>
              </Container>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: { xxs: 200, xs: 300, sm: 400 },
              border: "none",
              boxShadow: "none",
              background: "none",
            }}
          >
            <CardContent sx={{ display: "flex" }}>
              <Box
                sx={{
                  flexShrink: 0,
                  borderRadius: "9999px",
                  border: "1px solid rgb(206, 212, 220)",
                  padding: "1rem",
                  textAlign: "center",
                  height: "100%",
                  display: { xxs: "none", xs: "block" },
                }}
              >
                <Headset size={32} weight="fill" color="blue" />
              </Box>
              <Container>
                <Typography variant="h5" fontWeight={500} gutterBottom>
                  Service
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We're dedicated to your success, offering unwavering
                  assistance every step of the way.
                </Typography>
              </Container>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: { xxs: 200, xs: 300, sm: 400 },
              border: "none",
              boxShadow: "none",
              background: "none",
            }}
          >
            <CardContent sx={{ display: "flex" }}>
              <Box
                sx={{
                  flexShrink: 0,
                  borderRadius: "9999px",
                  border: "1px solid rgb(206, 212, 220)",
                  padding: "1rem",
                  textAlign: "center",
                  height: "100%",
                  display: { xxs: "none", xs: "block" },
                }}
              >
                <FadersHorizontal size={32} weight="fill" color="blue" />
              </Box>
              <Container>
                <Typography variant="h5" fontWeight={500} gutterBottom>
                  Customizable
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Craft your online identity precisely as you envision it with
                  our fully customizable websites.
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Box>
        {/* <Button
          onClick={() => scrollToSection(2)}
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          View our projects
        </Button> */}
      </Box>
    </Box>
  );
};

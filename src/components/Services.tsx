import React from "react";
import { Box } from "@mui/system";
import { Button, CardMedia, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import { FadersHorizontal, TrendUp } from "@phosphor-icons/react";
import { scrollToSection } from "../utils";

export const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        minHeight: "79vh",
        padding: "7vh 5vw",
        display: "flex",
        flexDirection: { xxs: "column", sm: "row" },
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "3vw",
          width: { sm: "45vw" },
          textAlign: "left",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "900",
          }}
        >
          Our Expertise
        </Typography>
        <Typography
          variant="h2"
          sx={{
            // typography: { xxs: 'h3', sm: 'h2' },
            marginTop: "10px",
            fontWeight: "900",
          }}
        >
          Cloud built by and for{" "}
          <span style={{ color: theme.palette.primary.main }}>
            Professionals
          </span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginY: "30px",
          }}
        >
          We create stunning websites that stand out and succeed in the
          ever-changing digital world with the latest technologies.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xxs: "column", lg: "row" },
            alignItems: { xxs: "center", sm: "flex-start" },
            marginBottom: { xxs: "40px", md: "0px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: {
                xxs: "80%",
                xs: "250px",
                sm: "300px",
                md: "350px",
                lg: "100%",
              },
              maxWidth: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "10px",
                justifyContent: { xxs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "9999px",
                  backgroundColor: "rgb(206, 212, 220)",
                  padding: "0.4rem",
                }}
              >
                <FadersHorizontal size={24} weight="fill" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "900" }}>
                Responsive Designs
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ textAlign: { xxs: "center", sm: "left" } }}
            >
              Delivering seamless user experiences across all devices.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: {
                xxs: "80%",
                xs: "250px",
                sm: "300px",
                md: "350px",
                lg: "100%",
              },
              maxWidth: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "10px",
                justifyContent: { xxs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "9999px",
                  backgroundColor: "rgb(206, 212, 220)",
                  padding: "0.4rem",
                }}
              >
                <TrendUp size={24} weight="fill" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "900" }}>
                SEO Optimization
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ textAlign: { xxs: "center", sm: "left" } }}
            >
              Boosting your website's visibility and ranking on search engines.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xxs: "center", sm: "flex-start" },
          }}
        >
          {/* <Button
            onClick={() => scrollToSection(3)}
            variant="contained"
            color="primary"
            sx={{ marginTop: "40px", lineHeight: "1", alignSelf: "center" }}
          >
            Learn More
          </Button> */}
        </Box>
      </Box>

      <img
        src="../images/services.jpg"
        alt="Service Image"
        // placeholder="blurred"
        className="home-image"
      ></img>
    </Box>
  );
};

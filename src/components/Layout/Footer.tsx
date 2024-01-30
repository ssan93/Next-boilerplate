import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#171844",
        padding: "64px 24px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ color: "white" }}>
        <Grid container spacing={5}>
          <Grid item xxs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Container
              sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <Link href="/" style={{ color: "grey", textDecoration: "none" }}>
                Home
              </Link>
              <Link
                href="/#about"
                style={{ color: "grey", textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                href="/#services"
                style={{ color: "grey", textDecoration: "none" }}
              >
                Services
              </Link>
            </Container>
          </Grid>
          <Grid item xxs={12} sm={4} sx={{ wordBreak: "break-word" }}>
            <Typography variant="h6" gutterBottom>
              Contacts
            </Typography>
            <Typography variant="body2">Paris, France</Typography>
            <Typography variant="body2">
              Email: 7webconsulting@gmail.com
            </Typography>
            <Typography variant="body2">Phone: +33649816047</Typography>
          </Grid>
          <Grid item xxs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://twitter.com/7webConsulting">
              <TwitterLogo
                size={32}
                style={{ color: "white", padding: "4px" }}
              />
            </Link>
            {/* <Link to="https://www.facebook.com/">
              <FacebookLogo size={32} style={{ color: "white" }} />
            </Link>
            <Link
              to="https://www.instagram.com/"
              color="inherit"
              style={{ padding: 1 }}
            > */}
            {/* <InstagramLogo size={32} style={{ color: "white" }} />
            </Link> */}
            <Link
              href="https://www.linkedin.com/company/7webconsulting/"
              color="inherit"
            >
              <LinkedinLogo
                size={32}
                style={{ color: "white", padding: "4px" }}
              />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" sx={{ color: "white" }} align="center">
            {"Copyright © "}
            <Link href="/" style={{ color: "white" }}>
              7web Consulting
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

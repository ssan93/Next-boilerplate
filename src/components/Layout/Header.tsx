import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
// import PropTypes from "prop-types";
import { List as ListIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ title = "7web Consulting" }) => {
  const drawerWidth = 240;
  const navItems = ["About", "Services", "Contact"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsPageTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "#1d1d1d", height: "100%" }}
    >
      <Link href="/" style={{ textDecoration: "none", width: "200px" }}>
        <Image
          src="/logo-7web.png"
          alt="7web Logo"
          layout="constrained"
          width={50}
          height={50}
        ></Image>
        <Typography variant="h5" sx={{ my: 2 }}>
          {title}
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/#${item.toLowerCase()}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          height: "7vh",
          background: isPageTop ? "transparent" : "#1d1d1d",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <ListIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xxs: "none", sm: "block" } }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                width: "fit-content",
              }}
            >
              <Image
                src="/logo-7web.png"
                alt="7web"
                // placeholder="blurred"
                layout="constrained"
                width={40}
                height={40}
              ></Image>
              <Typography variant="h6" sx={{ my: 2, color: "white" }}>
                {title}
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xxs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                href={`/#${item.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xxs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

// Header.defaultProps = {
//     title: '7web Consulting',
// }

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

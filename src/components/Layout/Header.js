import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/logo.svg";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"black"}
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, my: 6 }}
      >
        <AccountCircleRoundedIcon style={{color:"black", width:"50px"}}/> Ab Gaikwad
      </Typography>
      <Divider style={{color:"2px solid black"}} />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
          <Divider style={{color:"2px solid black"}}/>
        </li>
        <li>
          <NavLink to={"/menu"}>Skills</NavLink>
        </li>
        <Divider style={{color:"2px solid black"}}/>
        <li>
          <NavLink to={"/project"}>Projects</NavLink>
        </li>
        <Divider style={{color:"2px solid black"}}/>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <Divider style={{color:"2px solid black"}}/>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <Divider style={{color:"2px solid black"}}/>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "rgb(2, 12, 15)" , borderTopColor:"3px solid white"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"white"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
               <AccountCircleRoundedIcon style={{color:"white", width:"50px"}}/>Ab Gaikwad
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Skills</NavLink>
                </li>
                <li>
                  <NavLink to={"/project"}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
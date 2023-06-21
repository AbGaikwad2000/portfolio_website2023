import React from "react";
import { MenuList } from "../data/projects";
import Layout from "../components/Layout/Layout";
import Banner from "../images/bg.jpg";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <div  style={{ backgroundImage: `url(${Banner})` }}> 
      <a style={{color:"white", padding: "5px",textDecoration:"none"}}href="https://youtube.com/@abgaikwad7271" target="_blank">
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {MenuList.map((menu) => (
          <Card sx={{ Width: "20px", display: "flex", m: 5, borderRadius:"25px" }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
     </Box>
      </a>
      </div>
     
    </Layout>
  );
};

export default Menu;
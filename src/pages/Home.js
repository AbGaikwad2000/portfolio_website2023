import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bg.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 style={{ marginLeft:"0px" }}>Web Developer </h1>
          <p style={{ marginLeft:"5px" } }> Open to Work..</p>
          <Link to="/about">
            <button > About me</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
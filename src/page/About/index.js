import React from "react";
import Header from "../../component/header";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Introduce from "../../component/introduce";
import Banner from "../../component/banner";
import "../../assest/css/introduce.css";
const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduce />
      <Banner />
      <Footer />
    </div>
  );
};

export default About;

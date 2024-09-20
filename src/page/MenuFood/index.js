import React from "react";
import Header from "../../component/header";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Menu from "../../component/menuFood";
import Banner from "../../component/banner";
const MenuFood = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Menu />
      <Banner />
      <Footer />
    </div>
  );
};

export default MenuFood;

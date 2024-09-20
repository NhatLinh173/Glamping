import React from "react";
import Header from "../../component/header";
import Navbar from "../../component/navbar";
import Information from "../../component/information";
import Service from "../../component/service";
import New from "../../component/new";
import Discount from "../../component/discount";
import Program from "../../component/program";
import Footer from "../../component/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Information />
      <Service />
      <Program />
      <Discount />
      <New />
      <Footer />
    </div>
  );
};

export default Home;

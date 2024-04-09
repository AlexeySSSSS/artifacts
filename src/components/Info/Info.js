import React from "react";
import Cards from "./cards/cards";
import Box from "./Box/Box";
import Shade from "./Shade/Shade";
import Footer from "./Footer/Footer";

function Info() {
  return (
    <section className="info">
      <Cards />
      <Box />
      <Shade />
      <Footer />
      <p className="info__text">f&b ® 2020</p>
    </section>
  );
}

export default Info;

import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

function Up() {
  return (
    <section className="up">
      <div className="up__opacity">
        <Header />
        <Hero />
      </div>
    </section>
  );
}
export default Up;

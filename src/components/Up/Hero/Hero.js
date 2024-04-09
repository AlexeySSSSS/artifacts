/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <div className="hero__box">
          <div className="hero__info">
            <h1 className="hero__title">
              Крупнейшая коллекция природных артефактов
            </h1>
            <h2 className="hero__text">
              Являясь всего лишь частью общей картины, интерактивные прототипы,
              которые представляют собой яркий пример европейского типа
              политической и социальной культуры.
            </h2>
            <div className="hero__block">
              <button className="hero__img">Исследовать</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;

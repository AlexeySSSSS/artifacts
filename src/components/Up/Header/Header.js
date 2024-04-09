import React from "react";
import logo from "../../../images/logo.svg";

function Header() {
  return (
    <section className="header">
      <div className="header__box">
        <div className="header__logo">
          <img className="header__img" src={logo} alt="Логотип" />
        </div>
        <nav className="header__nav">
          <button className="header__btn">Каталог</button>
          <button className="header__btn">Галерея</button>
          <button className="header__btn">О лаборатории</button>
          <button className="header__btn">Контакты</button>
        </nav>
        <div className="header__block">
          <button className="header__search" />
          <button className="header__button" />
        </div>
      </div>
    </section>
  );
}

export default Header;

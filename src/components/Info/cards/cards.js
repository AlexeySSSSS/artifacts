/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import layer from "../../../images/Layer.png";
import group from "../../../images/Group.svg";
import Layer_0 from "../../../images/Layer_0.png";
import Group_0 from "../../../images/Group_0.png";
import Layer_1 from "../../../images/Layer_1.png";
import Group_1 from "../../../images/Group_1.png";
import Layer_2 from "../../../images/Layer_2.png";
import Group_2 from "../../../images/Group_2.png";

function Cards() {
  return (
    <section className="cards">
      <div className="cards__box">
        <div className="cards__card">
          <div className="cards__image">
            <img className="cards__number" src={group} alt="number" />
            <img className="cards__img" src={layer} alt="card" />
          </div>
          <div className="cards__info">
            <h2 className="cards__title">Fig. 1 (plant)</h2>
            <p className="cards__text">
              Имеется спорная точка зрения, гласящая примерно следующее: активно
              развивающиеся страны третьего мира<br></br> своевременно
              верифицированы.
            </p>
            <button className="cards__btn">Подробнее</button>
          </div>
        </div>
        <div className="cards__card">
          <div className="cards__image">
            <img className="cards__number" src={Group_0} alt="number" />
            <img className="cards__img" src={Layer_0} alt="card" />
          </div>
          <div className="cards__info">
            <h2 className="cards__title">Fig. 2 (flower)</h2>
            <p className="cards__text">
              Прежде всего,<br></br> синтетическое<br></br> тестирование влечет
              за<br></br> собой процесс внедрения и модернизации условий.
            </p>
            <button className="cards__btn">Подробнее</button>
          </div>
        </div>
        <div className="cards__card">
          <div className="cards__image">
            <img className="cards__number" src={Group_1} alt="number" />
            <img className="cards__img" src={Layer_1} alt="card" />
          </div>
          <div className="cards__info">
            <h2 className="cards__title">Fig. 3 (leaf)</h2>
            <p className="cards__text">
              Лишь непосредственные участники прогресса неоднозначны и будут в
              равной степени предоставлены сами себе<br></br> для работы.
            </p>
            <button className="cards__btn cards__btn_disabled">
              Подробнее
            </button>
          </div>
        </div>
        <div className="cards__card">
          <div className="cards__image">
            <img className="cards__number" src={Group_2} alt="number" />
            <img className="cards__img" src={Layer_2} alt="card" />
          </div>
          <div className="cards__info">
            <h2 className="cards__title">Fig. 4 (wood)</h2>
            <p className="cards__text">
              Базовый вектор развития
              <br /> не даёт нам иного выбора, кроме определения новых
              предложений.
            </p>
            <button className="cards__btn">Подробнее</button>
          </div>
        </div>
      </div>
      <div className="cards__nav">
        <button className="cards__left" />
        <p className="cards__prgf">1 из 3</p>
        <button className="cards__right" />
      </div>
    </section>
  );
}

export default Cards;

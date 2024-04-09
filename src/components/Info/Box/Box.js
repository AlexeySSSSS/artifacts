/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Moss_0 from "../../../images/Moss_0.png";
import Group_0 from "../../../images/Group_0.svg";
import Moss_1 from "../../../images/Moss_1.png";
import Group_1 from "../../../images/Group_1.svg";
import Moss_2 from "../../../images/Moss_2.png";
import Group_2 from "../../../images/Group_2.svg";
import Moss_3 from "../../../images/Moss_3.png";
import Group_3 from "../../../images/Group_3.svg";
import Moss_4 from "../../../images/Moss_4.png";
import Group_4 from "../../../images/Group_4.svg";
import Moss_5 from "../../../images/Moss_5.png";
import Group_5 from "../../../images/Group_5.svg";
import Moss_6 from "../../../images/Moss_6.png";
import Group_6 from "../../../images/Group_6.svg";

function Box() {
  return (
    <section className="box">
      <h2 className="box__title">Новые артефакты</h2>
      <div className="box__box">
        <div className="box__img">
          <div className="box__img_0">
            <img className="box__widht" src={Moss_0} alt="Картинка" />
          </div>
          <div className="box__img_1">
            <img className="box__widht" src={Group_0} alt="Картинка" />
          </div>
          <div className="box__img_2">
            <img className="box__widht" src={Moss_1} alt="Картинка" />
          </div>
          <div className="box__img_3">
            <img className="box__widht" src={Group_1} alt="Картинка" />
          </div>
          <div className="box__img_4">
            <img className="box__widht" src={Moss_2} alt="Картинка" />
          </div>
          <div className="box__img_5">
            <img className="box__widht" src={Group_2} alt="Картинка" />
          </div>
          <div className="box__img_6">
            <img className="box__widht" src={Moss_3} alt="Картинка" />
          </div>
          <div className="box__img_7">
            <img className="box__widht" src={Group_3} alt="Картинка" />
          </div>
          <div className="box__img_8">
            <img className="box__widht" src={Moss_4} alt="Картинка" />
          </div>
          <div className="box__img_9">
            <img className="box__widht" src={Group_4} alt="Картинка" />
          </div>
          <div className="box__img_10">
            <img className="box__widht" src={Moss_5} alt="Картинка" />
          </div>
          <div className="box__img_11">
            <img className="box__widht" src={Group_5} alt="Картинка" />
          </div>
          <div className="box__img_12">
            <img className="box__widht" src={Moss_6} alt="Картинка" />
          </div>
          <div className="box__img_13">
            <img className="box__widht" src={Group_6} alt="Картинка" />
          </div>
        </div>
        <div className="box__info">
          <p className="box__text">Kurische Nehrung 24</p>
          <p className="box__prgf">
            Вот вам яркий пример современных тенденций - начало повседневной
            <br />
            работы по формированию позиции выявляет срочную потребность методов
            управления процессами.
            <br />
            <br />
            Есть над чем задуматься: представители
            <br /> современных социальных резервов своевременно верифицированы.
          </p>
          <button className="box__btn">Читать далее</button>
        </div>
      </div>
    </section>
  );
}

export default Box;

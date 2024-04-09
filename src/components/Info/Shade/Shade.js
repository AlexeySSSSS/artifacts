/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

function Shade() {
  function submit(event) {
    event.preventDefault();
  }
  return (
    <section className="shade">
      <div className="shade__opacity">
        <h2 className="shade__title">Помочь проекту</h2>
        <p className="shade__text">
          Равным образом, экономическая повестка сегодняшнего дня не даёт нам
          иного выбора, кроме определения прогресса профессионального
          сообщества. Как принято считать, элементы политического процесса
          рассмотрены исключительно в разрезе маркетинговых и финансовых
          предпосылок.
        </p>
        <form type="submit" name="form__0" className="shade__form">
          <input
            name="input__name"
            type="text"
            className="shade__input"
            placeholder="Имя"
            pattern="^[А-Яа-яЁё\sa-zA-Z]+$"
          />
          <span className="shade__error">Недопустимый формат</span>
          <input
            name="input__email"
            type="email"
            className="shade__input"
            placeholder="Email"
          />
          <span className="shade__error">
            Это поле должно содержать E-Mail в формате example@site.com
          </span>
          <button onClick={submit} className="shade__btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Shade;

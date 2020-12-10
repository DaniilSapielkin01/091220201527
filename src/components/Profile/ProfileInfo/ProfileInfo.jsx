import React from "react";

import stl from "./ProfileInfo.module.css";
import avatar from "../../../assets/image/avatar.png";

export const ProfileInfo = () => {
  return (
    <>
      <div className={stl.info}>
        <div className={stl.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={stl.infoProfile}>
          <h1 className={stl.infoName}>Вероника Ростова</h1>
          <p className={stl.infoJob}>Менеджер по продажам</p>
          <div className={stl.infoDecription}>
            <p>Подберу для вас самые лучшие предложения.</p>
            <p>Мои услуги абсолютно бесплатны.</p>
          </div>
          <div className={stl.infoServices}>
            <div className={stl.servicesHeader}>Услуги</div>
            <ul className={stl.servicesTypes}>
              <li className={stl.servicesBooking}>
                <div className={stl.background}></div>
                <p>
                  Ручное бронирование<span>11</span>{" "}
                </p>
              </li>
              <li className={stl.servicesTours}>
                <div className={stl.background}></div>
                <p>
                  Пакетные туры <span>3</span>
                </p>
              </li>
              <li className={stl.servicesHotels}>
                <div className={stl.background}></div>
                <p>
                  Отели <span>1</span>
                </p>
              </li>
            </ul>
            <div className={stl.servicesTotal}>
              Всего <span>15</span>
            </div>
          </div>
        </div>
      </div>
      <div className={stl.reviews}>
        <h3>Последние отзывы</h3>
        <a href="/" className={stl.reviewsLink}>
          Все отзывы
        </a>
        <div className={stl.reviewsIcon}>
          <div className={stl.likesIcon}>
            <p>131</p>
          </div>
          <div className={stl.commentsIcon}>
            <p>14</p>
          </div>
        </div>
      </div>
    </>
  );
};

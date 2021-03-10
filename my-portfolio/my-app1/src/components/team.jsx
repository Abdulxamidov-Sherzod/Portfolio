import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aziz from "../img/Aziz.jpg";
import Asqar from "../img/Asqar.jpg";
import Abror from "../img/Abror.jpg";
import "../styles/team.scss";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div id="team" className="team">
        <div className="container">
          <h2 className="text-center text-white">My Team</h2>
          <Slider {...settings}>
            <div className="wrapper">
              <div className="card-box">
                <div className="card-box-img">
                  <img src={Aziz} alt="rasm topilmadi" />
                </div>
                <div className="img_info">
                  <h3 className="text-center">Azizbek</h3>
                  <h4 className="text-center mb-2">Flutter Developer</h4>
                  <ul>
                    <li>
                      <a href="#1">
                        <FaTelegram className="fa" />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <SiTiktok />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <GrYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="card-box">
                <div className="card-box-img">
                  <img src={Asqar} alt="rasm topilmadi" />
                </div>
                <div className="img_info">
                  <h3 className="text-center">Asqarbek</h3>
                  <h4 className="text-center mb-2">Web Developer</h4>
                  <ul>
                    <li>
                      <a href="#1">
                        <FaTelegram className="fa" />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <SiTiktok />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <GrYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="card-box">
                <div className="card-box-img">
                  <img src={Abror} alt="rasm topilmadi" />
                </div>
                <div className="img_info">
                  <h3 className="text-center">Abror</h3>
                  <h4 className="text-center mb-2">Web Developer</h4>
                  <ul>
                    <li>
                      <a href="#1">
                        <FaTelegram className="fa" />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <SiTiktok />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <GrYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="card-box">
                <div className="card-box-img">
                  <img src={Asqar} alt="rasm topilmadi" />
                </div>
                <div className="img_info">
                  <h3 className="text-center">Asqar</h3>
                  <h4 className="text-center mb-2">Web Developer</h4>
                  <ul>
                    <li>
                      <a href="#1">
                        <FaTelegram className="fa" />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <SiTiktok />
                      </a>
                    </li>
                    <li>
                      <a href="#1">
                        <GrYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

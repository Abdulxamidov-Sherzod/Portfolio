import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "../styles/about.scss";
import profil from "../img/profil.jpg";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="about" className="About">
      <div className="container">
        <div className="text">
          <h1 className="text-center">About me</h1>
          <div className="text-src text-center">
            <div className="chiz"></div>
            <span>who i am</span>
            <div className="chiz"></div>
          </div>
        </div>
        <div className="row">
          <div
            data-aos="fade-right"
            className="col-sm-12 col-md-5 mt-3 text-center"
          >
            <div className="box-img">
              <div className="info-img">
                <ul>
                  <li>
                    <a href="https://t.me/Sherzod_WebDeveloper">
                      <FaTelegram />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.instagram.com/sher003.me">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SiTiktok />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <GrYoutube />
                    </a>
                  </li>
                </ul>
              </div>
              <img src={profil} alt="" />
            </div>
          </div>
          <div data-aos="fade-left" className="col-sm-12 col-md-7">
            <div className="box-text">
              <h3>
                <span> I am Sherzod and I am a </span>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Web developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Bloger")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Viner")
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
              </h3>
              <p className="mr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                voluptatum error temporibus. Tempora nemo impedit voluptatibus
                cumque. Quo qui enim asperiores, sapiente, iste consectetur
                perspiciatis et molestias minus fuga mollitia! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Officiis laudantium
                consectetur possimus, earum asperiores vero ad eius beatae sint
                cupiditate at recusandae iure corporis accusantium repudiandae
                explicabo facilis sunt. Quod!
              </p>
              <div className="btn btn-lg btn-danger mt-3">Dowload CV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

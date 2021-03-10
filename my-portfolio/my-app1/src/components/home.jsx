import { Component } from "react";
import "../styles/home.scss";
import Typewriter from "typewriter-effect";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

class Home extends Component {
  state = {
    show: false,
    nav: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset > 350) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  btnToggle = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };

  render() {
    const { show, nav } = this.state;
    return (
      <div id="home" className="home">
        <div className="Navbar">
          <div className={`fixed ${nav && "fixed_black"}`}>
            <div className="logo">
              <a href="#home">
                Portfo<span>lio</span>
              </a>
            </div>
            <ul className="menu" id={show ? "hidden" : ""}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#team">Teams</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div onClick={this.btnToggle} className="top">
              {show ? (
                <AiOutlineClose style={{ fontSize: "25" }} />
              ) : (
                <TiThMenuOutline style={{ fontSize: "25" }} />
              )}
            </div>
          </div>
        </div>
        <div className="text-info text-center">
          <p>Hello, my name is</p>
          <h1>Sherzod</h1>
          <h3>
            <span>And I am </span>
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
                  .typeString("Tik-toker")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h3>
          <div className="btn btn btn-danger mt-5">Hire me</div>
        </div>
        <div className={`backTop ${nav && "backTop-black"}`}>
          <a href="#">
            <IoIosArrowUp />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;

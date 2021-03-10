import "../styles/services.scss";
import { FaPaintBrush } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { IoMdAppstore } from "react-icons/io";

const Services = () => {
  return (
    <div>
      <div id="services" className="services mt-5">
        <div className="container pt-5 pb-5">
          <h1 className="text-center text-white mt-3">My services</h1>
          <div className="text-src text-center">
            <div className="chiz"></div>
            <span>who i am</span>
            <div className="chiz"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 text-center mt-5 py-5">
              <div className="box">
                <div className="box1">
                  <FaPaintBrush style={{ fontSize: "40" }} />
                  <h3 className="mt-2">Web Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    totam, ullam eum excepturi animi minus?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text-center mt-5 py-5">
              <div className="box">
                <div className="box1">
                  <SiWebpack style={{ fontSize: "40" }} />
                  <h3 className="mt-2">Advertising</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    totam, ullam eum excepturi animi minus?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text-center mt-5 py-5">
              <div className="box">
                <div className="box1">
                  <IoMdAppstore style={{ fontSize: "40" }} />
                  <h3 className="mt-2">Apps Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    totam, ullam eum excepturi animi minus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import "../styles/contact.scss";
import { FaUserAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="text">
          <h1 className="text-center">Contact me</h1>
          <div className="text-src text-center">
            <div className="chiz"></div>
            <span>get in touch</span>
            <div className="chiz"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 text-justify">
            <h3>Get in touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              autem qui sapiente placeat quidem adipisci voluptates! Dolorem
              corrupti repudiandae enim esse aliquam earum dolores consequatur,
              vitae, nobis, incidunt perferendis atque! Id quibusdam incidunt
              eum impedit?
            </p>
            <div className="contact_info">
              <ul>
                <li>
                  <FaUserAlt style={{ fontSize: "25", color: "red" }} />
                </li>
                <li>
                  <h6>Name</h6>
                  <span>Sherzodbek</span>
                </li>
              </ul>
              <ul>
                <li>
                  <ImLocation style={{ fontSize: "25", color: "red" }} />
                </li>
                <li>
                  <h6>Address</h6>
                  <span>Kokand city</span>
                </li>
              </ul>
              <ul>
                <li>
                  <MdEmail style={{ fontSize: "25", color: "red" }} />
                </li>
                <li>
                  <h6>Email</h6>
                  <span>Sherzodbek</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h3>Message me</h3>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </form>
              </div>
              <div className="col-sm-12 col-md-6">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </form>
              </div>
              <div className="col-sm-12 col-md-6"></div>
              <div className="col-md-12">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-12">
                <form>
                  <div className="form-group">
                    <textarea rows="4" placeholder="Message"></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="btn btn btn-lg btn-danger">Send message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

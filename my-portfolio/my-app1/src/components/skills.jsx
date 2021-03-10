import "../styles/skills.scss";
import { Progress } from "antd";

const Skills = () => {
  return (
    <div id="skills" className="skills mt-5 pt-2">
      <div className="container ">
        <h1 className="text-center mt-5">My skills</h1>
        <div className="text-src text-center">
          <div className="chiz"></div>
          <span>who i am</span>
          <div className="chiz"></div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-4 card1">
            <h3>My create skills & expriences</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              modi, expedita possimus, minima inventore ratione distinctio alias
              quam cum quae tempore exercitationem. Architecto sit nisi ea
              aperiam. Incidunt quod dicta fugit adipisci molestiae odit debitis
              delectus officia consectetur temporibus nulla at animi iusto
              veritatis, saepe iste cumque, obcaecati atque veniam! Amet
              consequatur in eveniet nihil laborum incidunt velit eligendi,
              provident quis eos. Dolore, temporibus velit fugiat eaque delectus
              et ipsam.
            </p>
            <button className="btn btn-lg btn-danger mt-2">Read more</button>
          </div>
          <div className="col-sm-12 col-md-6 mt-4 card2">
            <div className="box_line">
              HTML
              <Progress className='one' percent={90} status="active" />
            </div>
            <div className="box_line mt-3">
              CSS
              <Progress className='two' percent={60} status="active" />
            </div>
            <div className="box_line mt-3">
              JavaScript
              <Progress className='three' percent={80} status="active" />
            </div>
            <div className="box_line mt-3">
              PHP
              <Progress className='four' percent={50} status="active" />
            </div>
            <div className="box_line mt-3">
              React JS
              <Progress className='five' percent={70} status="active" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

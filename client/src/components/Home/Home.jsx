import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="titleDiv">
          <h1>
            Simple <span>CRUD</span> App
          </h1>
        </div>
        <div className="animDiv">
          <h1>
            <Typewriter
              options={{
                strings: ["created by", "Shanto"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "./Form_a.css";
import Form_b from "./ui_a/Form_b";
import ScrollAnimation from "../Testop/ScrollAnimation";

function Form_a() {
  return (
    <div className="content_a">
      <div className="ap_a">
        <ScrollAnimation type="slideRight" duration={1}>
          <h1>Light In The Dark</h1>
        </ScrollAnimation>
      </div>
      <div className="ap_b">
        <ScrollAnimation type="slideLeft" duration={1}>
          <h1>
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>{" "}
            <br /> Velit necessitatibus, doloremque id delectus amet quasi
            veritatis veniam officia corrupti accusantium consequuntur quibusdam
            aliquid, iure corporis, nisi culpa nihil rerum maxime! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quasi error ab porro
            repellat, atque optio aliquid minus sint? Non placeat saepe iure et
            magni fugiat totam minima, hic quo! Repellendus?
          </h1>
        </ScrollAnimation>
      </div>
      <div className="ap_c">
        <ScrollAnimation type="slideUp" duration={1}>
          <Form_b />
        </ScrollAnimation>
      </div>
      <div className="ap_d"></div>
    </div>
  );
}

export default Form_a;

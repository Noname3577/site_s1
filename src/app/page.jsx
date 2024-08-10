"use client";

import SlideBox from "./component/SlideBox/SlideBox";
import Header from "./component/header_one/Header";
import "./home.css";
import "./boxs.css";
import Form_a from "./component/Form_a/Form_a";
import ScrollAnimation from "./component/Testop/ScrollAnimation";

export default function Home() {
  const slides = [
    {
      content: (
        <div className="boxs_a">
          <ScrollAnimation type="slideUp" duration={0.8} delay={0}>
            <div className="text_a">
              <div className="head_a">header_text</div>
              <div className="head_b">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae quisquam, iusto vitae corrupti ipsam ex.
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ),
    },
    {
      content: (
        <div className="boxs_b">
          <ScrollAnimation type="slideUp" duration={0.8} delay={0}>
            <div className="text_a">
              <div className="head_a">header_text</div>
              <div className="head_b">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae quisquam, iusto vitae corrupti ipsam ex.
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ),
    },
    {
      content: (
        <div className="boxs_c">
          <ScrollAnimation type="slideUp" duration={0.8} delay={0}>
            <div className="text_a">
              <div className="head_a">header_text</div>
              <div className="head_b">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae quisquam, iusto vitae corrupti ipsam ex.
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ),
    },
  ];

  return (
    <div className="bg_a">
      <div>
        <Header />
      </div>
      <div>
        <SlideBox slides={slides} />
      </div>
      <div>
        <Form_a />
      </div>
      <div className="bg_b">
        <h1>© Copyright 2024 Profile Lv.1 - All Rights Reserved</h1>
      </div>
    </div>
  );
}

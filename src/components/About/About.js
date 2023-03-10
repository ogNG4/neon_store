import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

import ArrowDown from "../UI/ArrowDown";
import css from "./About.module.scss";

const About = (props) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>Find your neon</h1>
      <div className={css["typing-animation"]}>
        <div className={css.typewriter}>
          <TypeWriterEffect
            startDelay={2000}
            cursorColor="#ffff"
            multiText={[
              "Our neon shop offers a wide variety of neon signs",
              "We have neon signs for businesses, homes, and events",
              "All of our neon signs are handmade and customizable",
              "Choose from a range of colors, fonts, and designs",
              "Shop now and add some neon to your life!",
            ]}
            multiTextDelay={1000}
            typeSpeed={50}
            
          />
        </div>
      </div>
          <ArrowDown onScroll={props.onScroll}/>
    </div>
  );
};

export default About;

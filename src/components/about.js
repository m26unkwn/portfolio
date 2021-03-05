import React from "react";

import image from "../assets/image.png";

export const About = () => {
  return (
    <>
      <section className='about-me'>
        <div className='about-me-container'>
          <div className='text'>
            <h2>About Me</h2>
            <p>
              Hey👋 Finally you reached here😀. Welcome to my rollercoaster🎢
              Journey.
            </p>
            <p>
              I am a Frontend Developer👨‍💻 and imtermediate react Developer.
              While learning React i came to know that
              <b> react is more javascript than react</b>.
            </p>
            <p>
              In my free time I like to read about scientific developments,
              mathematics, and computational mathematics. I also like to take my
              chances of winning big.
            </p>
            <p>
              Fun fact! I've been programing for
              <span id='time-container'>NaN</span> seconds!
            </p>
          </div>
          <img src={image} alt='ima' className='potrait' />
        </div>
      </section>
    </>
  );
};

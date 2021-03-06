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
              Hey👋 Finally you reached here, Hope you are doing well!. Welcome
              to my rollercoaster🎢 Journey.
            </p>
            <p>
              I am a Frontend Developer👨‍💻 and an intermediate react Developer
              based in 🇮🇳. While learning React i came to know that
              <b> react is more javascript than react</b>.
            </p>
            <p>
              In my free time I like to read about energy Developement,
              programming, and some Robin Sharma's books. I am also a music
              producer and try to produce some music in my free time.
            </p>
            <p>
              Fun fact! I've been programing for
              <span>{}</span> seconds!
            </p>
          </div>
          <img src={image} alt='ima' className='potrait' />
        </div>
      </section>
    </>
  );
};

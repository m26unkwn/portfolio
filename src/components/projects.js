import React from "react";

import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
import Resume from "../assets/Resume.pdf";

export const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>

      <details className='project'>
        <summary className='project-title'>
          <AiOutlineArrowRight />
          <h3>The Music Player</h3>
        </summary>

        <p className='project-description'>
          I created a music player where i stored my own music at same time
          users can play it.
        </p>
      </details>
      <details className='project'>
        <summary className='project-title'>
          <AiOutlineArrowRight />
          <h3>The Expense Tracker</h3>
        </summary>

        <p className='project-description'>
          I made a expnese tracker where user can track there monthly expenses.
          I used React and Context API to create it.
        </p>
      </details>
      <details className='project'>
        <summary className='project-title'>
          <AiOutlineArrowRight />
          <h3>The Fire Tracker</h3>
        </summary>

        <p className='project-description'>
          I used a NASA API and Google MAP API to plot a fire effected places
          over map on given coordinates.
        </p>
      </details>
      <div className='view'>
        <a class='btn' href={Resume} target='_blank' rel='noreferrer' download>
          DOWNLOAD RESUME <AiOutlineArrowDown size={10} />
        </a>
      </div>
    </section>
  );
};

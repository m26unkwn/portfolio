import React from 'react'

export const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <details className="project">
          <summary class="project-title">
            <h3>The first computer program</h3>
          </summary>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Diagram_for_the_computation_of_Bernoulli_numbers.jpg/220px-Diagram_for_the_computation_of_Bernoulli_numbers.jpg" alt="Lovelace's diagram from note G, the first published computer
          algorithm" class="project-image" />
          <p class="project-description">
            The world's first computer program for computing Bernoulli numbers.
          </p>
        </details>
            <details className="project">
          <summary class="project-title">
            <h3>The Analytical Engine</h3>
          </summary>
          <img src="https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555925585/shape/mentalfloss/analyticalmachine_babbage_london.jpg?itok=5vRTwQjb" alt="An original model of part of the Analytical Engine" class="project-image" />
          <p class="project-description">
            I helped Charles Babbage on topics ranging from math to computation
            that helped the development of the Analytical Engine.
          </p>
        </details>
            <details className="project">
          <summary class="project-title">
            <h3>The Ada programming language</h3>
          </summary>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ada_Mascot_with_slogan.svg/220px-Ada_Mascot_with_slogan.svg.png" alt="Ada mascot, a black and cobalt blue hummingbird, flying above the
          slogan &quot;Time-tested, safe and secure&quot;" class="project-image" />
          <p class="project-description">
            My work inspired the United States Department of Defense to name
            their new programming language after me.
          </p>
        </details>
        </section>
    )
}
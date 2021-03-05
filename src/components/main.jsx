import React from 'react'
import { Projects } from "./projects";
import {About} from './about';
import {Skill} from './skills';
import "./main.css"
 const Main = () => {
    return (
        <main >
      <About />
      <Projects />
           <Skill /> 
        </main>
    )
}

export default Main;
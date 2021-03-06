import React from 'react'
import {ImHtmlFive, ImCss3} from 'react-icons/im';
import {IoLogoJavascript, IoLogoPython} from 'react-icons/io';
import {FaReact, FaGit, FaNpm,FaTerminal} from 'react-icons/fa';
import {BsFillBootstrapFill} from 'react-icons/bs';
export const Skill = () => {
    return (
        <section>
            <h2>Skills</h2>
            <div className="skill-container">
                    <ImHtmlFive  size={30}/>
                    <ImCss3 size={30} />
                    <IoLogoJavascript size={30} />
                    <FaReact size={30} />
                    <IoLogoPython size={30} />
                    <FaGit size={30} />
                    <FaNpm size={30} />
                    <FaTerminal size={30} />
                    <BsFillBootstrapFill  size={30}/>
            </div>
        </section>
    )
}

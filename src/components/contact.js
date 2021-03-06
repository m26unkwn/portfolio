import React from "react";

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div class='contact'>
        <h4>Have an interesting project? I would love to hear about it!</h4>
        <div class='contact-profile'>
          <a
            href='https://www.linkedin.com/in/monu-shukla/'
            target='_blank'
            rel='noreferrer'>
            <AiFillLinkedin size={40} />
          </a>
          <a
            href=' https://github.com/m26unkwn'
            target='_blank'
            rel='noreferrer'>
            <AiOutlineGithub size={40} />
          </a>
          <a
            href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=getmonushukla@gmail.com'
            target='_blank'
            rel='noreferrer'>
            <AiFillMail size={40} />
          </a>
          <a href='tel:918591898286'>
            <AiFillPhone size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

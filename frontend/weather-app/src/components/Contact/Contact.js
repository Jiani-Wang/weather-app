import React from "react";
import { Github, Linkedin } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-box">
      <h4>Contact:</h4>
      <div className="social-icons">
        <a
          href="https://github.com/Jiani-Wang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/jiani-wang-8070752a3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;

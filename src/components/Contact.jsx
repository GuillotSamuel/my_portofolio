import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

export default function Contact() {
  /* const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post("http://localhost:5678/send-email", formData)
    .then((response) => {
      console.log(response.data); 
    })
    .catch((error) => {
      console.error(error);
    });
  }; */

  const email = "samuelguillot75@gmail.com";

  return (
    <div className="contactContainer" id="contact">
      <div className="contactContainer3">
        <span className="contactSlogan">
          Feel free to contact me{/*   with this form or */} by{" "}
          <a href={`mailto:${email}`} className="emailLink">
            email
          </a>
          !
        </span>
        {/* <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="nameElement">
              <input
                type="text"
                id="nameInput"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeHolder="Name"
                required
              />
            </div>
            <div className="emailElement">
              <input
                type="email"
                id="emailInput"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="subjectElement">
              <input
                type="text"
                id="subjectInput"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="messageElement">
              <textarea
                id="messageInput"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div> */}



      </div>
      <div className="blob3"></div>
        <div className="blob4"></div>
    </div>
  );
}

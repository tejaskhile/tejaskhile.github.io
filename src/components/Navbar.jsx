import { useState, useRef } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Navbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [dropdown, SetDropdown] = useState(false);
  const form = useRef();

  const validateForm = () => {
    if (!name || !email || !message) {
      setError("All fields are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }
    setError("");
    return true;
  };

  const sendEmail = (event) => {
    event.preventDefault();
    
    if (!validateForm()) return;

    emailjs
      .sendForm(
        "service_fxahunh",
        "template_ojf21aj",
        form.current,
        "B251vtNzlYaOYVSVZ"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          // Clear form
          setName("");
          setEmail("");
          setMessage("");
          SetDropdown(false);
        },
        (err) => {
          console.error(err.text);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  const setToggle = () => {
    SetDropdown(!dropdown);
    setError(""); // Clear any errors when toggling form
  };

  return (
    <div className="navbar">
      <div className="nav-items">
        <Link className="logo" to="/">
          tk.
        </Link>
        <i className="fa-regular fa-message" onClick={setToggle}></i>
        {dropdown && (
          <div className="dropdown">
            <div className="contact-header">
              <h3>Get in touch with me.</h3>
              <i className="fa-solid fa-xmark" onClick={setToggle}></i>
            </div>
            <div className="contact-form">
              {error && <div className="error-message">{error}</div>}
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <input
                    className="inputs"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="eg.Jack Sparrow"
                    name="user_name"
                    required
                  />
                  <input
                    className="inputs"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eg.jack@sparrow.com"
                    name="user_email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Savvy?"
                    required
                  ></textarea>
                </div>
                <button id="send-btn" type="submit">
                  Send<i className="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
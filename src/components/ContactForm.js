import React from "react";
import "./styles/ContactForm.css";

function ContactForm(props) {
  return (
    <div className="marginBot">
      <div className="container">
        <div className="row">
          <h1 className="header2">Nous contacter</h1>
        </div>
        <form>
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="feedback-input"
            placeholder="Email"
          />
          <input
            name="phone"
            type="text"
            className="feedback-input"
            placeholder="Phone Number"
          />
          <textarea
            name="text"
            className="feedback-input"
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

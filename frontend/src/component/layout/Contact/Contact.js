import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
        <div className="contact">
            <form>
                <h3>GET IN TOUCH</h3>
                <input type="text" id="name" placeholder="Your Name" required/>
                <input type="email" id="email" placeholder="Email" required/>
                <input type="text" id="phone" placeholder="Phone no." required/>
                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                <button type="submit">Send</button>
            </form>
            

        </div>
        
    
    
  );
};

export default Contact;
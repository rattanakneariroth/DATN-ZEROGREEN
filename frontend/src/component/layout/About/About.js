import React from "react";
import "./About.css";
import logo from "../../../images/zerogreen-logo.png";
import { Fragment } from "react";


const About = () => {
  return (
    <Fragment>
        <div className="banner-about">
            <img src={logo} alt="logo" /> 
        </div>
        <div className="container-about">
            <h2>Shop Zero makes zero-waste living easier</h2>
            <p>At Shop Zero, we’re here to help you shop more consciously and reduce your environmental impact. Bring your own containers for bulk, unpackaged food, lower impact personal care, ‘on the go‘ items, sustainable household goods and eco-friendly gifts.</p>
            <h3>Why do your eco-friendly shopping at Shop Zero?</h3>
            <p>Our focus is on providing you with great quality sustainable goods with minimal packaging and a lower environmental impact. At Shop Zero, we know the provenance of what we sell – where our products come from and what they’re made of. We work alongside local producers and makers to bring you great quality sustainable products.

            To reduce packaging and food waste, we offer whole foods and store cupboard essentials in bulk and unpackaged. All ready for your own containers, in the quantities that you choose. We also host an exciting programme of ethically-focused events, talks, pop-up shops and workshops throughout the year featuring some amazing local independent businesses and individuals.

            And we’re here to talk with you about what you’re buying, so you can shop sustainably with confidence.

            We need a change in the way we consume and shop. Nature is cyclical and we need to follow her example (click here to find out more about adopting a circular economy). We’ve become disconnected from our environment. At Shop Zero, we want to support the move away from a linear approach of producing greater amounts of waste to taking more responsibility for the impact we have on our world.

            </p>
            <h3>Let’s work together to make a positive change.</h3>
            <button type="">SHOP NOW</button>


        </div>
    

    </Fragment>
    
    
    
        
    
    
    
  );
};

export default About;
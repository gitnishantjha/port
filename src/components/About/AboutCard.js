import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishant kumar jha </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay.
            <br /> */}
            I have doing BE in Information Science and Engineering from BMS Institute of Tehnology and Management.
            <br />
            <br />
              Some of my Achievements are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Rated 1576 on leetcode.
            </li>
            <li className="about-activity">
              <ImPointRight />Got the Rank of 6k out of 32k+ participants.
            </li>
            <li className="about-activity">
              <ImPointRight />Won first Prize in Project Based Learning.
            </li>
            <li className="about-activity">
              <ImPointRight />Won 7 badges on leetcode.
            </li>
            <li className="about-activity">
              <ImPointRight />Finalist of SJCE Hackathon. 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nishant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

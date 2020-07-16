import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about">
      <h1>This is the Shoe Store</h1>
      <div>
        <h2 className="mission-statement">
          <span
            className="mission-statement__phrase mission-statement__phrase--first"
            data-sr-id={2}
            style={{
              visibility: "visible",
              WebkitTransform: "translateY(0) scale(1)",
              opacity: 1,
              transform: "translateY(0) scale(1)",
              WebkitTransition:
                "-webkit-transform 1s ease-out 0s, opacity 1s ease-out 0s",
              transition: "transform 1s ease-out 0s, opacity 1s ease-out 0s",
            }}
          >
            Our Mission:
          </span>
          <span
            className="mission-statement__phrase"
            data-sr-id={3}
            style={{
              visibility: "visible",
              WebkitTransform: "translateY(0) scale(1)",
              opacity: 1,
              transform: "translateY(0) scale(1)",
              WebkitTransition:
                "-webkit-transform 1s ease-out 0s, opacity 1s ease-out 0s",
              transition: "transform 1s ease-out 0s, opacity 1s ease-out 0s",
            }}
          >
            Bring Inspiration
          </span>
          <span
            className="mission-statement__phrase"
            data-sr-id={4}
            style={{
              visibility: "visible",
              WebkitTransform: "translateY(0) scale(1)",
              opacity: 1,
              transform: "translateY(0) scale(1)",
              WebkitTransition:
                "-webkit-transform 1s ease-out 0s, opacity 1s ease-out 0s",
              transition: "transform 1s ease-out 0s, opacity 1s ease-out 0s",
            }}
          >
            And Innovation
          </span>
          <span
            className="mission-statement__phrase"
            data-sr-id={5}
            style={{
              visibility: "visible",
              WebkitTransform: "translateY(0) scale(1)",
              opacity: 1,
              transform: "translateY(0) scale(1)",
              WebkitTransition:
                "-webkit-transform 1s ease-out 0s, opacity 1s ease-out 0s",
              transition: "transform 1s ease-out 0s, opacity 1s ease-out 0s",
            }}
          >
            To Every Athlete*
          </span>
          <span
            className="mission-statement__phrase"
            data-sr-id={6}
            style={{
              visibility: "visible",
              WebkitTransform: "translateY(0) scale(1)",
              opacity: 1,
              transform: "translateY(0) scale(1)",
              WebkitTransition:
                "-webkit-transform 1s ease-out 0s, opacity 1s ease-out 0s",
              transition: "transform 1s ease-out 0s, opacity 1s ease-out 0s",
            }}
          >
            In The World
          </span>
          <span
            className="mission-statement__phrase  mission-statement__phrase--small"
            data-sr-id={7}
            style={{
              visibility: "visible",
              WebkitTransform: "translateY(0) scale(1)",
              opacity: 1,
              transform: "translateY(0) scale(1)",
              WebkitTransition:
                "-webkit-transform 1s ease-out 0s, opacity 1s ease-out 0s",
              transition: "transform 1s ease-out 0s, opacity 1s ease-out 0s",
            }}
          >
            *If You Have A Body, You Are An Athlete.
          </span>
        </h2>
      </div>
      );
    </div>
  );
}

export default About;

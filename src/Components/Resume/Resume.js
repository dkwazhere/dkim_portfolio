import React, { Component } from "react";
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="resume-container animated slideInUp">
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}

export default Resume;

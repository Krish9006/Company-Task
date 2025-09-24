import React from "react";
import { FaSearch } from "react-icons/fa";

function Body() {
  return (
    <div className="main-container"> {/* This is our layout container */}
      <div className="left-content"> {/* This holds all the text */}
        <h1>
          People who<br /> care about <br />your <span className="highlight">growth</span>
        </h1>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
        <div className="input-box">
          <input type="text" placeholder="Search your courses..." />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <p className="privacy">We care about your data in our <a href="#">privacy policy.</a></p>
        <div className="checkboxes">
          <p>✔️ Multiple case <br /> studies</p>
          <p>✔️ Multiple industry<br /> projects</p>
          <p>✔️ Multiple certifications to build your<br /> profile</p>
        </div>
        <ul>
          <li>Work Integration</li>
          <li>Project-Based Learning</li>
          <li>Networking Opportunities</li>
        </ul>
      </div>
      <div className="right-image"> {/* This holds the image */}
        <img src="https://www.skilllearningacademy.com/static/media/HomeBanner.5f25adb32ab82243fcb5.png" alt="A tree with colorful leaves inside a lightbulb" />
      </div>
    </div>
  );
}

export default Body;
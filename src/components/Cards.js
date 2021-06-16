import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my work</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              //src=''
              text="Youtube clone, made with React/Redux"
              label="NotYouTube"
              path="/projects"
            />
            <CardItem
              //src=''
              text="Netflix clone, build with TMDB API, React, Redux, and hosted on firebase"
              label="Netflix clone"
              path="/projects"
            />
            <CardItem
              //src=''
              text="Simple Portfolio built in React with CSS3 and HTML5"
              label="Amazon Clone"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              //src=''
              text="Simple chat application built with React, Redux, with CSS3 styling, and hosted on Firebase"
              label="ChatApplication"
              path="/projects"
            />
            <CardItem
              //src=''
              text="Simple project built with React, Redux, with CSS3 styling, and hosted on Firebase"
              label="CodingChallengeFetchRewards"
              path="/projects"
            />
            <CardItem
              //src=''
              text="Simple Portfolio built with Vanilla Javascript with CSS3 and HTML5"
              label="Old VanillaPortfolio"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              //src=''
              text="Simple project built with React, Redux, with CSS3 styling, and hosted on Firebase"
              label="Portfolio2"
              path="/projects"
            />
            <CardItem
              //src='images/img-9.jpg'
              text="Asp .Net 3.1, MVC5, Core3.1, Entity Framework, CSS3, HTML5, JavaScript, SQL, GoogleMaps API, GeoCode API, Stripe API"
              label="Sudsy dCC Capstone"
              path="/projects"
            />
            <CardItem
              //src=''
              text="Asp .Net 3.1, MVC5, Core3.1, Entity Framework, CSS3, HTML5, JavaScript, SQL, GoogleMaps API, GeoCode API,"
              label="WasteCollection dCC Project"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              //src='images/img-3.jpg'
              text="Education and Skills"
              label="Education"
              path="/education"
            />
            <CardItem
              //src='images/img-4.jpg'
              text="Employment History"
              label="Employment"
              path="/employment"
            />
            <CardItem
              //src='images/img-8.jpg'
              text="Resume"
              label="resume"
              path="/resume"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

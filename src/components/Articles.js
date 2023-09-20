import { AiFillClockCircle } from "react-icons/ai";
import interior1 from "../assets/images/interior1.svg";
import avatar from "../assets/images/avatar2.jpg";

export default function Articles() {
  return (
    <div className="articles-container our-reviews-container" >
      <header>
        <div className="section-heading">
          <div className="line"></div>
          <p>See Tips And Tricks From Our Partnership</p>
        </div>
        <center>
          {" "}
          <h3>Find Out More About Selling And Buying Homes</h3>
        </center>
      </header>

      <center>
        <button className="more-articles">More Article</button>
      </center>

      <div className="articles">
        <div className="article">
          <div className="image-section">
            <img src={interior1} alt="" />
          </div>

          <div className="details-section">
            <div className="profile">
              <div className="icon">
                <img src={avatar} alt="Dianne Russel Profile" />
              </div>
              <div className="name">
                <b>Dianne Russel</b>
                <div className="subtitle">Managing Director</div>
              </div>
            </div>
            <header>The things We Need To Check Before Buying A House</header>

            <p className="article-footer">
              {" "}
              <AiFillClockCircle /> 4 min read | 25 Apr 2023
            </p>
          </div>
        </div>

        <div className="article">
          <div className="image-section">
            <img src={interior1} alt="" />
          </div>

          <div className="details-section">
            <div className="profile">
              <div className="icon">
                <img src={avatar} alt="Dianne Russel Profile" />
              </div>
              <div className="name">
                <b>Dianne Russel</b>
                <div className="subtitle">Managing Director</div>
              </div>
            </div>
            <header>The things We Need To Check Before Buying A House</header>

            <p className="article-footer">
              {" "}
              <AiFillClockCircle /> 4 min read | 25 Apr 2023
            </p>
          </div>
        </div>

        <div className="article">
          <div className="image-section">
            <img src={interior1} alt="" />
          </div>

          <div className="details-section">
            <div className="profile">
              <div className="icon">
                <img src={avatar} alt="Dianne Russel Profile" />
              </div>
              <div className="name">
                <b>Dianne Russel</b>
                <div className="subtitle">Managing Director</div>
              </div>
            </div>
            <header>The things We Need To Check Before Buying A House</header>

            <p className="article-footer">
              {" "}
              <AiFillClockCircle /> 4 min read | 25 Apr 2023
            </p>
          </div>
        </div>

        <div className="article">
          <div className="image-section">
            <img src={interior1} alt="" />
          </div>

          <div className="details-section">
            <div className="profile">
              <div className="icon">
                <img src={avatar} alt="Dianne Russel Profile" />
              </div>
              <div className="name">
                <b>Dianne Russel</b>
                <div className="subtitle">Managing Director</div>
              </div>
            </div>
            <header>The things We Need To Check Before Buying A House</header>

            <p className="article-footer">
              {" "}
              <AiFillClockCircle /> 4 min read | 25 Apr 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

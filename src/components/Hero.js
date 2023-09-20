import { AiOutlineRight } from "react-icons/ai";
import partner1 from "../assets/icons/partner1.svg";
import partner2 from "../assets/icons/partner2.svg";
import partner3 from "../assets/icons/partner3.svg";
import partner4 from "../assets/icons/partner4.svg";
import { useEffect, useState } from "react";
export default function Hero() {
  const [isBackgroundColored, setIsBackgroundColored] = useState(false);

  const handleScroll = () => {
    const threshold = 150;
    setIsBackgroundColored(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-container">
      <div
        className={
          !isBackgroundColored ? "text-section" : "text-section hide-blur"
        }
      >
        <div className="content-width">
          <header>
            Find The Place To Live{" "}
            <span className="your-dreams">Your Dreams</span> Easily Here
          </header>

          <p>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>

          <div className="search-section">
            <button>
              Search <AiOutlineRight />{" "}
            </button>
            <input
              type="text"
              placeholder="Search for apartments in your desired location"
            />
          </div>

          <div className="partners-section">
            Our Partnership
            <div className="partners-list">
              <div className="partner">
                <img src={partner1} alt="" />
              </div>

              <div className="partner">
                <img src={partner2} alt="" />
              </div>

              <div className="partner">
                <img src={partner3} alt="" />
              </div>

              <div className="partner">
                <img src={partner4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-section"></div>
    </div>
  );
}

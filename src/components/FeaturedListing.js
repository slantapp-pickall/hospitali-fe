import { IoIosBed } from "react-icons/io";
import { FaBath, FaParking } from "react-icons/fa";
import { Gi3DStairs } from "react-icons/gi";
import avatar from "../assets/images/avatar2.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import furniture1 from "../assets/images/furniture1.svg";
import furniture2 from "../assets/images/furniture2.svg";
import furniture3 from "../assets/images/furniture3.svg";

import YouTube from "react-youtube";

export default function FeaturedListing() {
  const [viewContact, setViewContact] = useState(false);
  return (
    <div className="featured-listing-container">
      <div className="description-section">
        <header className="section-heading">
          <div className="line"></div> Ready to Let
        </header>

        <header className="section-title">Let's Tour And See Our House!</header>

        <p className="subtitle">
          Houses recommended by our partners that have been curated to become
          the home of your dreams
        </p>

        <b>House Details</b>

        <div className="house-details">
          <div className="item">
            <div className="icon">
              <IoIosBed />
            </div>
            <div className="text">4 Bedrooms</div>
          </div>

          <div className="item">
            <div className="icon">
              <FaBath />
            </div>
            <div className="text">2 Bathrooms</div>
          </div>

          <div className="item">
            <div className="icon">
              <IoIosBed />
            </div>
            <div className="text">1 Carpark</div>
          </div>
          <div className="item">
            <div className="icon">
              <Gi3DStairs />
            </div>
            <div className="text">2 Floors</div>
          </div>
        </div>

        <div className="owner-section">
          <div className="profile">
            <div className="icon">
              <img src={avatar} alt="Dianne Russel Profile" />
            </div>
            <div className="name">
              <b>Dianne Russel</b>
              <div className="subtitle">Managing Director</div>
            </div>
          </div>
          <div
            className={viewContact ? "active-contact" : "contact"}
            onClick={() => setViewContact(!viewContact)}
          >
            <div className="phone" onClick={(e) => e.stopPropagation()}>
              <BsFillTelephoneFill />
            </div>
            <a
              href="mailto:contact@homely.com"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <AiOutlineMail />
            </a>
            <b>Contact Now</b>
          </div>
        </div>
      </div>

      <div className="media-section">
        <div className="video-container">
          {/* <video width={"100%"} height={"100%"} controls autoPlay>
                <source src="https://youtu.be/zumJJUL_ruM" type="video/mp4" />
            </video> */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/wlac2uoc6Is?si=RIAmtJMqUHxCZ0KB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            
          ></iframe>

          {/* <YouTube videoId="https://youtu.be/zumJJUL_ruM?si=KPjrBeWLb24Wm9ap" /> */}

          <div className="interior-images">
            <div className="image">
              <img src={furniture1} alt="" />
            </div>
            <div className="image">
              <img src={furniture2} alt="" />
            </div>
            <div className="image">
              <img src={furniture3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import avatar from "../assets/images/avatar2.jpg";
import { AiFillStar } from "react-icons/ai";
import review_image from "../assets/images/review_house.svg";
import review_image2 from "../assets/images/review_house2.svg";
import review_image3 from "../assets/images/review_house3.svg";





export default function OurReviews() {
  const sliderRef = useRef(null);
  const [scrolling, setScrolling] = useState({
    right: true,
    left: false,
  });
  const settings = {
    slidesToShow: 2.7,
    slidesToScroll: 1,
    infinite: true,
    dots:true,
    autoplay:true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="our-reviews-container ">
      <header>
        <div className="section-heading">
          <div className="line"></div>
          <p>See Our Reviews</p>
        </div>
        <h3> What Our Users Say About Us</h3>
      </header>

      {/* <div className="review-item">
        <img src={review_image} alt="reviewed house" />
        <div className="house-img"></div>

        <div className="review">
          <header>best! i got the house i wanted through Homely</header>

          <div className="description">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated process to
            be able to find information on the house we want.
          </div>

          <div className="rater">
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

              <div className="rating">
                <span className="star">
                  <AiFillStar />
                </span>
                <span>
                  <b>4.6</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="listings-row">
        <Slider responsive={true} rows={1} ref={sliderRef} {...settings}>
          {reviewList.map((item, i) => {
            return (
              <div className="review-item" key={i}>
                <div className="review-img">
                  <img src={item.review_image} alt="reviewed house" />
                </div>

                <div className="review">
                  <header>best! i got the house i wanted through Homely</header>

                  <div className="description">
                    Through this website I can get a house with the type and
                    specifications I want very easily, without a complicated
                    process to be able to find information on the house we want.
                  </div>

                  <div className="rater">
                    <div className="owner-section">
                      <div className="profile">
                        <div className="icon">
                          <img src={avatar} alt="Dianne Russel Profile" />
                        </div>
                        <div className="name">
                          <b>{item.reviewer.name}</b>
                          <div className="subtitle">Managing Director</div>
                        </div>
                      </div>

                      <div className="rating">
                        <span className="star">
                          <AiFillStar />
                        </span>
                        <span>
                          <b>4.6</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

const reviewList = [
  {
    review_image: review_image,
    title: "Best! i got the house i wanted through Homely",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want",

    reviewer: {
      image: avatar,
      name: "Johnathan Mark",
      stars: "4.6",
    },
  },

  {
    review_image: review_image2,
    title: "Best! i got the house i wanted through Homely",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want",

    reviewer: {
      image: avatar,
      name: "Thomas Parte",
      stars: "4.6",
    },
  },

  {
    review_image: review_image,
    title: "Best! i got the house i wanted through Homely",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want",

    reviewer: {
      image: avatar,
      name: "Dianne Russel",
      stars: "4.6",
    },
  },

  {
    review_image: review_image3,
    title: "Best! i got the house i wanted through Homely",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want",

    reviewer: {
      image: avatar,
      name: "Dianne Russel",
      stars: "4.6",
    },
  },

  {
    review_image: review_image2,
    title: "Best! i got the house i wanted through Homely",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want",

    reviewer: {
      image: avatar,
      name: "Dianne Russel",
      stars: "4.6",
    },
  },
];

import { AiFillHome, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdOutlineApartment, MdOutlineVilla } from "react-icons/md";
import house1 from "../assets/images/house1.svg";
import house2 from "../assets/images/house2.svg";
import house3 from "../assets/images/house3.svg";
import house4 from "../assets/images/house4.svg";
import favicon from "../assets/icons/favicon.svg";
import popular from "../assets/icons/popular.svg";
import newListing from "../assets/icons/new.svg";
import best_deal from "../assets/icons/best_deal.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

export default function Recommendations() {
  const sliderRef = useRef(null);
  const [scrolling, setScrolling] = useState({
    right: true,
    left: false,
  });
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    setScrolling({
      ...scrolling,
      right: true,
      left: false,
    });
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    setScrolling({
      ...scrolling,
      right: false,
      left: true,
    });
    sliderRef.current.slickPrev();
  };

  const [view, setView] = useState({
    home: true,
    villa: false,
    apartment: false,
  });

  return (
    <div className="recommendation-container">
      <header className="heading">
        <div className="line"></div> Our Recommendation
      </header>

      <nav className="type-navigator">
        <header className="title">Apartment</header>

        <div className="button-section">
          <button
            className={view.home ? "active-type" : ""}
            onClick={() => {
              setView({ ...view, home: true, villa: false, apartment: false });
            }}
          >
            {" "}
            <AiFillHome />
            Home
          </button>
          <button
            className={view.villa ? "active-type" : ""}
            onClick={() => {
              setView({ ...view, home: false, villa: true, apartment: false });
            }}
          >
            <MdOutlineVilla /> Villa
          </button>
          <button
            className={view.apartment ? "active-type" : ""}
            onClick={() => {
              setView({ ...view, home: false, villa: false, apartment: true });
            }}
          >
            <MdOutlineApartment />
            Apartment
          </button>
        </div>

        <div className="controls">
          <div className={scrolling.left ? " active-direction" : "direction"}
          onClick={() => prevSlide()}
          >
            <div className="icon" >
              <AiOutlineLeft />
            </div>
          </div>
          <div
            className={scrolling.right ? " active-direction" : "direction"}
            onClick={() => nextSlide()}
          >
            {" "}
            <div className="icon">
              <AiOutlineRight />
            </div>{" "}
          </div>
        </div>
      </nav>

      <div className="listings-row">
        <Slider responsive={true} rows={1} ref={sliderRef} {...settings}>
          {apartments.map((item, i) => {
            return (
              <div className="listing" key={i}>
                <div className="image">
                  <img src={item.image} alt="roselands house" />
                  <div className="label">
                    <img
                      draggable="false"
                      src={
                        item.tag === "popular"
                          ? popular
                          : item.tag === "new"
                          ? newListing
                          : best_deal
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="description">
                  <div className="title">{item.title}</div>
                  <div className="price">$ {item.price}</div>
                </div>
                <div className="owner-section">
                  <div className="icon">
                    <img src={favicon} alt="Homely" />
                  </div>
                  <div className="text-section">
                    <b>Homely</b>
                    <div className="subtitle">Manchester, Kentucky</div>
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

const apartments = [
  {
    title: "Roseland House",
    price: "35,000,000",
    image: house1,
    tag: "popular",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "Woodlandside",
    price: "20,000,000",
    image: house2,
    tag: "new",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "The Old Lighthouse",
    price: "44,000,000",
    image: house3,
    tag: "best_deal",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "Woodlandside",
    price: "20,000,000",
    image: house4,
    tag: "new",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "The Old Lighthouse",
    price: "44,000,000",
    image: house3,
    tag: "best_deal",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "Woodlandside",
    price: "20,000,000",
    image: house2,
    tag: "new",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },
];

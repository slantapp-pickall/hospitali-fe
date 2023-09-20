import { AiFillHome, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdOutlineApartment, MdOutlineVilla } from "react-icons/md";
import house1 from "../assets/images/cooper.jpg";
import house2 from "../assets/images/bus1.jpg";
import house3 from "../assets/images/personal.jpg";
import house4 from "../assets/images/flashy.jpg";
import favicon from "../assets/icons/favicon.svg";
import popular from "../assets/icons/popular.svg";
import newListing from "../assets/icons/new.svg";
import best_deal from "../assets/icons/best_deal.svg";

import dropoff from "../assets/icons/dropoff.svg"
import delivery from "../assets/icons/delivery.svg"
import electric from "../assets/icons/electric.svg"
import bus from "../assets/icons/bus.svg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import Prompt from "../pages/Prompt";

export default function CarRentals() {
  const sliderRef = useRef(null);
  const [getStarted, setGetStarted] = useState(false);
  const [scrolling, setScrolling] = useState({
    right: true,
    left: false,
  });
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    rtl:false,
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
  return (
    <div className="recommendation-container car-rental-container">
      <header className="heading">
        <div className="line"></div> Our Topnotch Mobility Services
      </header>
      <nav className="type-navigator">
        <header className="title">Easy Mobility for a Comfortable Stay</header>

        {/* <div className="button-section">
          <button className="active-type">
            {" "}
            <AiFillHome />
            Home
          </button>
          <button>
            <MdOutlineVilla /> Villa
          </button>
          <button>
            <MdOutlineApartment />
            Apartment
          </button>
        </div> */}

        {/* <div className="controls">
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
        </div> */}
      </nav>

      

      <div className="service-list">
        <div className="item">
          <div className="icon">
            <img src={dropoff} alt="" />
          </div>
          <div className="text">
            <header>Dropoff</header>
            <p>Move from airport, bus and train stations to your apartment with ease</p>
          </div>
          <button onClick={() => setGetStarted(true)}>Request</button>
        </div>

        <div className="item">
          <div className="icon">
            <img src={electric} alt="" />
          </div>
          <div className="text">
            <header>Private</header>
            <p>Rent a car for your duration of stay</p>
          </div>
          <button onClick={() => setGetStarted(true)}>Request</button>
        </div>

        <div className="item">
          <div className="icon">
            <img src={delivery} alt="" />
          </div>
          <div className="text">
            <header>Dispatch</header>
            <p>Move parcels around from the comfort of your residence</p>
          </div>
          <button onClick={() => setGetStarted(true)}>Request </button>
        </div>



        <div className="item">
          <div className="icon">
            <img src={bus} alt="" />
          </div>
          <div className="text">
            <header>Team Movement</header>
            <p>
                Need vehicles to move team(s) around town? We got you!
            </p>
          </div>
            <button onClick={() => setGetStarted(true)}>Request</button>
        </div>



      </div>

      <nav className="type-navigator ">
      <header className="title">A Sneak Peak at Our Collection</header>

 
       

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
                  {/* <div className="label">
                        <img draggable="false" src={item.tag==="popular"?popular:item.tag==="new"?newListing:best_deal} alt="" />
                      </div> */}
                </div>
                <div className="description">
                  <div className="title">{item.title}</div>
                  <div className="price">$ {item.price}</div>
                </div>
                {/* <div className="owner-section">
                      <div className="icon">
                        <img src={favicon} alt="Homely" />
                      </div>
                      <div className="text-section">
                        <b>Homely</b>
                        <div className="subtitle">Manchester, Kentucky</div>
                      </div>
                    </div> */}
              </div>
            );
          })}
        </Slider>
      </div>


      <div className="modals">
      {getStarted ? (
            <Prompt handleCloseModal={() => setGetStarted(false)} />
          ) : null}
      </div>
    </div>
  );
}

const apartments = [
  {
    title: "Cooper SR (With personal driver)",
    price: "500 (per week)",
    image: house1,
    tag: "popular",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "12 - 22 Seater Corporate Bus",
    price: "1800 - 3, 000 (Per Week)",
    image: house2,
    tag: "new",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "BMW XM (With Chauffeur)",
    price: "200 (per day)",
    image: house3,
    tag: "best_deal",
    type: "apartment",
    owner: {
      icon: "",
      name: "Homely",
    },
  },

  {
    title: "Sports Cars",
    price: "4,000 - 6,000 (per week)",
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

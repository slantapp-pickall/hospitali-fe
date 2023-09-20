import Articles from "../components/Articles";
import CarRentals from "../components/CarRentals";
import FeaturedListing from "../components/FeaturedListing";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import OurReviews from "../components/OurReviews";
import Recommendations from "../components/Recommendations";
import Subscribe from "../components/Subscribe";
import "../styles/landingPage.scss";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <NavBar />

      <div className="app-body">
        <Hero />
        <div id="property">
          <Recommendations />
          <FeaturedListing />
        </div>
        <div id="car-rental">
        <CarRentals/>
        </div>
        <div id="about">
          <OurReviews />
        </div>
        <div id="articles">
          <Articles />
        </div>
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

import logo from "../assets/icons/logo.svg";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="item-section">
        <div className="logo-section">
          <img src={logo} alt="" />
        </div>
        <div className="description">
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </div>
      </div>

      <div className="item-section">
        <header>Property</header>

        <ul>
            <li>Houses</li>
            <li>Apartment</li>
            <li>Villa</li>
        </ul>
      </div>

      <div className="item-section">
        <header>Article</header>

        <ul>
            <li>New Article</li>
            <li>Popular Article</li>
            <li>Most Read</li>
            <li>
                Tips and Tricks
            </li>
        </ul>
      </div>
      <div className="item-section">
        <header>Contact</header>

        <ul>
            <li>24 Blantye Street, Wuse II</li>
            <li>(234) 45966607</li>
            <li>info@homely.com</li>
            <li>
                Tips and Tricks
            </li>
        </ul>
      </div>







    </div>
  );
}

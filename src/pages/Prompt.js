import { AiOutlineClose } from "react-icons/ai";
import playstore from "../assets/icons/playstore.png";
import applestore from "../assets/icons/applestore.png";

export default function Prompt({ handleCloseModal }) {
  return (
    <div className="overlay" onClick={() => handleCloseModal()} >
      <div className="prompt-container">
        <div className="heading">
          <AiOutlineClose onClick={(e) => handleCloseModal(e.stopPropagation())} />
        </div>
        <header>
          <h2>Continue on Mobile</h2>
        </header>

        <center className="text-section">
          For a better experience download our app to continue on mobile.
        </center>

        <div className="modal-body">
          <div className="stores-section">
            <div className="item">
              <img src={playstore} alt="get it on Google Playstore" />
            </div>
            <div className="item">
              <img src={applestore} alt="get it on Apple store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

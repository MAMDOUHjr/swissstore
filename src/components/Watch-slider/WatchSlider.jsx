import { useState, useContext } from "react";
import WatchStoreContext from "../../context/WatchStorContext";
import Modal from "../modal/Modal";
import "./Watch-slider.css";
import Rating from "./Rating";

const WatchSlider = ({ data }) => {
  const { addToCart } = useContext(WatchStoreContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [WatchData, setWatchData] = useState(null);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  // Handle Modal
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setWatchData(item);
  };

  return (
    <div className="Watch-slider-container">
      {slideIndex >= 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left Watch-slider-arrow-left"
        ></i>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="Watch-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="Watch-slide-item">
            <img
              src={`/Watches/${item.image}`}
              alt={item.title}
              className="Watch-slide-item-img"
            />
            <h3 className="Watch-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="Watch-slider-item-price">${item.price}</div>
            <div className="Watch-slider-icons-wrapper">
              <i
                onClick={() => handleOpenModal(item)}
                className="bi bi-eye-fill"
              ></i>
              <i
                onClick={() => addToCart(item, 1)}
                className="bi bi-cart-plus"
              ></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length - 1 && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right Watch-slider-arrow-right"
        ></i>
      )}
      {openModal && <Modal WatchData={WatchData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default WatchSlider;

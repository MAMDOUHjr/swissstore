import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

import WatchStoreContext from "../../context/WatchStorContext";

const HeaderMiddle = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [WatchData, setWatchData] = useState(null);

  const [search, setSearch] = useState("");
  const { cartInfoLength } = useContext(WatchStoreContext);

  // Handle Modal
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setWatchData(item);
  };

  // convert json data to array

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Swiss time </b>
      </Link>
      <div className="header-middle-search-box">
        <div className="search__box">
          {data
            .filter(
              (item) =>
                (item.title.toLowerCase().includes(search.toLowerCase()) ||
                  item.author.toLowerCase().includes(search.toLowerCase())) &&
                search.length > 0
            )
            .map((item) => (
              <>
                <i
                  onClick={() => handleOpenModal(item)}
                  className="search__box-item"
                >
                  {item.title}
                </i>
                <br />
              </>
            ))}
        </div>
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
      {openModal && <Modal WatchData={WatchData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default HeaderMiddle;

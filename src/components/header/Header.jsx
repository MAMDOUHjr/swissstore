import { useState } from "react";
import "./header.css";
import HeaderMiddle from "./HeaderMiddle";
import { Watches } from "../../data/Watches";

import Navbar from "./Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <HeaderMiddle data={Watches} />
      <Navbar setToggle={setToggle} toggle={toggle} />
    </header>
  );
};

export default Header;

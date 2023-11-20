import React, { useEffect, useState, useRef } from "react";
import "./NavBar.css";
import logo from "../../images/Logo.png";
import user from "../../images/user.svg";
import shopping_bag from "../../images/shopping-bag.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../Redux/User/UserActions";

function NavBar() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.User);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(window.innerWidth > 1000); // assuming full width is 768px or less

  useEffect(() => {
    const handleResize = () => {
      setIsFullWidth(window.innerWidth > 1000);
      if (!isFullWidth) {
        setIsMenuOpen(false); // Close the menu when the screen becomes full width
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isFullWidth]);

  useEffect(() => {
    if (window.localStorage.getItem("userId") === null) {
      navigate("/login");
    } else {
      if (userInfo === null) dispatch(getUserById(localStorage.userId));
    }
  }, [dispatch, navigate, userInfo]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Menu = ({ isOpen, handleMenuClick }) => {
    const overlayRef = useRef();

    const handleOverlayClick = () => {
      handleMenuClick();
    };

    return (
      <>
        {isOpen && (
          <div ref={overlayRef} className="overlay" onClick={handleOverlayClick}></div>
        )}
        <div className={`menu-container ${isOpen ? "open" : ""}`}>
          <div className="menu-content">
            <div className="menu-item">Men</div>
            <div className="menu-item">Women</div>
            <div className="menu-item">Accessories</div>
            <Link to="/about" className="menu-item">
              About
            </Link>
            <div className="menu-item-special">Shoe Finder Quiz</div>
            <Link to="/helpcenter" className="menu-item">
              Support
            </Link>
            <div className="menu-item">
              {userInfo === null ? (
                <img className="link" src={user} alt="" />
              ) : (
                <img className="userImage" src={userInfo.image} width={30} height={30} alt="" />
              )}
            </div>
            <Link to="/shoppingCart" className="menu-item">
              <img className="link" src={shopping_bag} alt="" />
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="sale">
        <div className="sale-content">Free US shipping on order $80+</div>
      </div>
      <div className="navbar">
        <Link to={"/"}>
          <img className="logo" src={logo} alt=""></img>
        </Link>

        <div className="navbar-group">
          <Link className="nav-item" to={"/explore/men"}>
            <div> Men </div>
          </Link>
          <Link className="nav-item" to={"/explore/women"}>
            <div> Women </div>
          </Link>
          <Link className="nav-item" to={"/explore/accessories"}>
            {" "}
            <div> Accessories</div>{" "}
          </Link>
          <Link className="Link" to={"/about"}>
            <div> About</div>{" "}
          </Link>
          <Link className="nav-item-special" to={"/find-shoes"}>
            <div>Shoe Finder Quiz</div>{" "}
          </Link>
        </div>

        <div className="navbar-group">
          <Link className="Link" to={"/helpcenter"}>
            <div className="nav-item no-animation "> support </div>
          </Link>
          <div className="nav-item no-animation">
            {userInfo === null && <img className="link" src={user} alt=""></img>}
            {userInfo !== null && (
              <img className="userImage" src={userInfo.image} width={30} height={30} alt=""></img>
            )}
          </div>
          <Link className="Link" to={"/shoppingCart"}>
            <div className="nav-item no-animation">
              <img className="link" src={shopping_bag} alt=""></img>
            </div>
          </Link>
        </div>

        <div className="menu" onClick={handleMenuClick}>
          <img src={require("./menu.png")} width={"30"} height={"30"} alt="" />
        </div>
        <Menu isOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      </div>
    </>
  );
}

export default NavBar;

import {Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../UI/responsive.css";
import Cart from "../UI/Cart";
import classes from "../Header/Header.module.css";
import Menu from "./Menu";
import Modal from "../Modal/Modal";
import SearchBar from "../Home/SearchBar";
const Header = (props) => {
  const [ModalScreen, setModalScreen] = useState(false);
  const HandleModal = (e) => {
    setModalScreen(true);
  };
  const hideModale = (e) => {
    setModalScreen(false);
  };
  const [productHome, setProductHome] = useState([]);
  useEffect(() => {
    fetch("https://dm-ku.herokuapp.com/product")
      .then((response) => response.json())
      .then((data) => {
        setProductHome(data);
      });
  }, []);
  props.setdataJs(productHome)

  return (
    <>
      <div className={classes.Header}>
        <Cart className={`container-fluid ${classes.setMargin}`}>
          <div className={`row ${classes.setDisplay}`}>
            <div className={`${classes.setImg} col-sm-4`}>
              <Link to="/">
                <img
                  src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/aplee_300x300.png?v=1645331261"
                  alt="error"
                  className={classes.im}
                />
              </Link>
            </div>
            <div className={`${classes.inputSearch} col-sm-4`}>
              <div className={`${classes.divinput}`}>
                {/* <input
                  placeholder="Search our store"
                /> */}
                <SearchBar placeholder={"Search our store ...."} data = {productHome} />
              </div>
              <div className={`${classes.iconSearch}`}>
                <i class={`fa fa-search ${classes.iconSearchInput}`}></i>
              </div>
            </div>
            <div className={`${classes.hobbyCart} col-sm-4`}>
              <div className={`${classes.searchIpad} ${classes.setMr}`}>
                <i className={`fa fa-search ${classes.iconSearchInput}`}></i>
              </div>
              <div
                className={`${classes.iconsame} ${classes.setSpace} ${classes.setMr}`}
              >
                <Link to="/Wishlist">
                  <i className="fa-regular fa-heart"></i>
                  <p className={classes.p1}>WISHLIST</p>

                </Link>
              </div>
              <div className={`${classes.iconsame} ${classes.setMr}`}>
                <Link to="/MyCart">
                  <i className="fa-solid fa-cart-plus icon-cart"></i>
                  <p className= {classes.p1}>MY CART</p>
                  {props.CountAdd > 0 && <p className= {classes.p2}>{JSON.parse(localStorage.getItem('CountAdd'))}</p>}
                </Link>
              </div>
              <div className={`${classes.icdown} ${classes.setMr}`}>
                <i className="fas fa-caret-down"></i>
              </div>
              <div
                className={`${classes.icmenu} ${classes.setMr}`}
                onClick={HandleModal}
              >
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </Cart>
      </div>
      <Menu />
      {ModalScreen && <Modal Hide={hideModale} Show={HandleModal} />}
    </>
  );
};
export default Header;

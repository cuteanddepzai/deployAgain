import "./Modal.css";
import classes from "../Header/Header.module.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
const Modal = (props) => {
  const [show , setShow] = useState(false)
  const [show2 , setShow2] = useState(false)
  return (
    <>
      <div className="Modal" onClick={props.Hide}></div>
      <div className="ModalContainer">
        <div className="input_search">
          <input placeholder="Search store us" className="input_search_input" />
          <div className="input_search_icon">
            <a href="">
              <i className={`fa fa-search`}></i>
            </a>
          </div>
        </div>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/Mac">MAC</a>
            <i class="fa-solid fa-plus iconPlus" onClick={()=>{setShow(!show)}}></i>
          </li>
          {show &&<ul className="ul_2">
                <li>
                  <a href="/Mac">iMac</a>
                </li>
                <li>
                  <a href="Mac">Mac Mini</a>
                </li>
                <li>
                  <a href="/Mac">Macbook</a>
                </li>
              </ul>}
          <li>
            <a href="/Iphone">IPHONE</a>
            <i class="fa-solid fa-plus" onClick={()=>{setShow2(!show2)}}></i>
          </li>
          {show2 && <ul className="ul_3">
                <li>
                  <a href="/Iphone">iPhone11</a>
                </li>
                <li>
                  <a href="/Iphone">iPhone12</a>
                </li>
                <li>
                  <a href="/Iphone">iPhone13</a>
                </li>
              </ul>}

          <li>
            <a href="">ABOUT US</a>
          </li>

          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <div className={`iconClose`} onClick={props.Hide}>
          <i class="fas fa-times"></i>
        </div>
      </div>
    </>
  );
};
export default Modal;

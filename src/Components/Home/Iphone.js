import classes from "../Home/Iphone.module.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Iphone = (props) => {
  const imgElement = useRef();
  let navagitave = useNavigate();
  const HandleAddCart = (obj) => {
    props.propsParentSetCountAdd((preState) => {
      return preState + 1;
    });
    props.propsParentSetListAdd((preState) => {
      return [...preState, obj];
    });
  };
  const handDetail = (id) => {
    navagitave(`detail/${id}`);
  };
  return (
    <div className={`container ${classes.setMb}`}>
      <div className={classes.ContentIphone}>
        <h2>iPhone Series</h2>
        <p>Check and Get Your Desired Product!</p>
      </div>
      <div className="row">
        {props.renderAPI
          .filter((each, index) => {
            return each.status === "iphone" && each.layout === "home";
          })
          .map((each, index) => {
            let a = {
              imgNoHover: each.img,
              imgHover: each.image,
            };
            return (
              <div
                className={`col-lg-3 col-md-6 ${classes.hoverDisplay}`}
                key={index}
              >
                <a href="">
                  <div className={classes.div1}>
                    <img
                      src={a.imgNoHover}
                      ref={imgElement}
                      onMouseOver={(e) => {
                        e.target.src = a.imgHover;
                      }}
                      onMouseOut={(e) => {
                        e.target.src = a.imgNoHover;
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        handDetail(each.id);
                      }}
                    />
                    {each.sale && (
                      <span className={classes.hoverSale}>{each.sales}</span>
                    )}
                    <div
                      className={classes.hoverDetail}
                      onClick={(e) => {
                        e.preventDefault();
                        HandleAddCart({
                          name: each.name,
                          price: each.price,
                          img: each.image,
                          id: each.id,
                        });
                      }}
                    >
                      ADD TO CART
                    </div>
                  </div>
                  <div className={classes.div2}>
                    <a
                      href=""
                      onClick={(event) => {
                        event.preventDefault();
                        handDetail(each.id);
                      }}
                    >
                      {each.name}
                    </a>
                    <span
                      onClick={(event) => {
                        event.preventDefault();
                        handDetail(each.id);
                      }}
                    >
                      TK : {each.price}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Iphone;

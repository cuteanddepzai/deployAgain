import { useState , useRef } from "react";
import styles from "../Home/NewWatch.module.css";

import classes from '../Home/Iphone.module.css'
import { useNavigate } from "react-router-dom";

const NewWatch = (props) => {
    const imgElement = useRef()
  let navagitave = useNavigate()

  const HandleAddCart = (obj) => {
    console.log("hellooooo");
    props.propsParentSetCountAdd((preState) => {
         return  preState + 1 ;
     
    });
    props.propsParentSetListAdd((preState)=>{
      return [...preState , obj]
    })
  };
  const handDetail = (id) =>{
    navagitave(`detail/${id}`)
  }
  return (
    <div className={`container ${styles.setMT}`}>
      <div className={`row`}>
        <div className="col-lg-4 col-md-6">
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/fdfdfdf.jpg?v=1643623055" style={{width : '100%'}} />
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="row">
            {props.renderAPI
              .filter((each, index) => {
                return each.status === "clock" && each.layout === "home";
              })
              .map((each, index) => {
                let a = {
                  imgNoHover: each.img,
                  imgHover: each.image,
                };
                return (
                  <div  className={`col-lg-4 col-md-6 ${classes.hoverDisplay}`} key={index}> 
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
                          onClick={(event)=>{
                            event.preventDefault()
                            handDetail(each.id)
                          }}
                        />
                        {each.sale && (
                          <span className={classes.hoverSale}>
                            {each.sales}
                          </span>
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
                        <a href="" onClick={(event)=>{
                        event.preventDefault()
                        handDetail(each.id)
                      }}>{each.name}</a>
                        <span onClick={(event)=>{
                        event.preventDefault()
                        handDetail(each.id)
                      }}>TK : {each.price}</span>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewWatch;

import styles from "../Home/NewArrival.module.css";
import classes from "../Home/Iphone.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const NewArrival = (props) => {
  const [toggleState, settoggleState] = useState(1);
  const imgElement = useRef();
  let navagitave = useNavigate()

  const handletoggle = (index) => {
    console.log(index);
    settoggleState(index);
  };
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
    <div className="container" style={{ marginBottom: "50px" }}>
      <div className={styles.contegary}>
        <div className="row" style={{ alignItems: "center" }}>
          <div className={`col-lg-6 ${styles.setJustify}`}>
            <h4>New Arrival</h4>
          </div>
          <div className={`col-lg-6 ${styles.setJustify}`}>
            <button
              className={
                toggleState === 1 ? styles.activeBtn : styles.noActiveBtn
              }
              onClick={() => {
                handletoggle(1);
              }}
            >
              MacBook
            </button>
            <button
              className={
                toggleState === 2 ? styles.activeBtn : styles.noActiveBtn
              }
              onClick={() => {
                handletoggle(2);
              }}
            >
              Pad
            </button>
            <button
              className={
                toggleState === 3 ? styles.activeBtn : styles.noActiveBtn
              }
              onClick={() => {
                handletoggle(3);
              }}
            >
              Watch
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          toggleState === 1 ? styles.productActive : styles.productNoActive
        }
      >
        <div className="row">
          {props.renderAPI
            .filter((each, index) => {
              return each.status === "laptop" && each.layout === "home";
            })
            .map((each, index) => {
              let a = {
                imgNoHover: each.img,
                imgHover: each.image,
              };
              return (
                <div className={`col-lg-4 col-md-6 ${classes.hoverDisplay}`} key={index} > 
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
                        alt = 'no img'
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
      <div
        className={
          toggleState === 2 ? styles.productActive : styles.productNoActive
        }
      >
        <div className="row">
          {props.renderAPI
            .filter((each, index) => {
              return each.status === "ipad" && each.layout === "home";
            })
            .map((each, index) => {
              let a = {
                imgNoHover: each.img,
                imgHover: each.image,
              };
              return (
                <div className={`col-lg-4 col-md-6 ${classes.hoverDisplay}`} key={index}>
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
                        alt = 'no img'
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
      <div className={toggleState === 3 ? styles.productActive : styles.productNoActive}>
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
                <div className={`col-lg-4 col-md-6 ${classes.hoverDisplay}`} key={index}>
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
  );
};
export default NewArrival;

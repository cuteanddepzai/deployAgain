import styles from "../Shop/Shop.module.css";
import { Link } from "react-router-dom";
import classes from "../Home/Iphone.module.css";
import { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
const Shop = (props) => {
  const imgElement = useRef();
  let navagitave = useNavigate();
  const HandleAddCart = (obj) => {
    props.setCountAdd((preState) => {
      return preState + 1;
    });
    props.setListAdd((preState) => {
      return [...preState, obj];
    });
  };
  const handDetail = (id) => {
    navagitave(`/detail/${id}`);
  };
  return (
    <div style={{marginBottom : '50px'}}>
      <div className={`${styles.Macbook}`}>
        <div className={`container-md ${styles.title}`}>
          <h2>{props.title}</h2>
          <p>
            <Link to="/">Home /</Link>
            <p>Macbook</p>
          </p>
        </div>
      </div>

      <div className={`${styles.MacbookShow}`}>
        <div className={`container-md ${styles.show}`}>
          <div className={`row`}>
            <div className={`col-lg-3 ${styles.option}`}>
              <div className={`row`}>
                <ul className={`col-lg-12 ${styles.optionDetail}`}>
                  <li className = {styles.listOption}>
                    <span>Categories</span>
                    <i class="fas fa-angle-down"></i>
                    {/* <i class="fas fa-angle-up"></i> */}
                  </li>
                  <li className = {styles.listOption}>
                    <span>Custom Menu</span>
                    <i class="fas fa-angle-down"></i>
                  </li>
                  <li className = {styles.listOption}>
                    <span>Availability</span>
                    <i class="fas fa-angle-down"></i>
                  </li>
                  <li className = {styles.listOption}>
                    <span>Price</span>
                    <i class="fas fa-angle-down"></i>
                  </li>
                </ul>
                <div className={`col-lg-12 ${styles.imgAd}`}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/fdfdfdf_grande.jpg?v=1643623055"
                    style={{ width: "100%" }}
                    alt = ' no img'
                  />
                </div>
              </div>
            </div>
            <div className={`col-lg-9 ${styles.showfilter}`}>
              <div className="row">
                {props.renderData
                  .map((each, index) => {
                    let a = {
                      imgNoHover: each.img,
                      imgHover: each.image,
                    };
                    return (
                      <div
                        className={`col-lg-4 col-md-6 ${classes.hoverDisplay}`}
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;

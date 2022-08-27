import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "../MyCart/Mycart.module.css";
const MyCart = (props) => {
  let navagitave = useNavigate()
  const handDetail = (id) =>{
    navagitave(`/detail/${id}`)
  }
  const filterSame = props.renderData;
  const uniqueIds = [];
  let showCounter 
  const unique = filterSame.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }

    return false;
  });
  const counter = {};

  filterSame.forEach(function (obj) {
    var key = JSON.stringify(obj.id);
    counter[key] = (counter[key] || 0) + 1;
  });
  console.log(counter);
  const handleDelete = (id) => {
    props.setListAdd((preState) => {
      let newState = [...preState].filter((each, index) => {
        return each.id !== id;
      });
      showCounter = newState.length
      return newState;
    });
    props.setCountAdd((preState) => {
      // return preState -1 < 1 ? 0 : preState -1 
      return showCounter
    });
  };
  const HandleAdd = (obj) => {
    props.setListAdd((preState)=>{
    return [...preState , obj]
  }) 
    props.setCountAdd((preState) => {
      return  preState + 1 ;
  });
  }
  const HandleDeleteEach = (id) => {
    props.setListAdd((preState) => {
      let newState = [...preState].filter((each, index) => {
        return index!== id;
      });
      return newState;
    });
    props.setCountAdd((preState) => {
      return preState -1 < 1 ? 0 : preState -1 
    });
  }
  const HandleClearAll = () => {
    props.setListAdd((preState) => {
      return []
    })
    props.setCountAdd((preState) => {
      return 0
    })
  }
  const HandleSum = () => {
    let sum = 0;
    props.renderData.forEach((each, index) => {
      sum = sum + +each.price;
    });
    return sum;
  };
  HandleSum();
  
  return (
    <div>
      <div className={`${classes.pathMyCart}`}>
        <div className={`container ${classes.setDisplay}`}>
          <Link to="/">Home / </Link>
          <p>Your Shopping Cart</p>
        </div>
      </div>
      <div className={`container`}>
        <div className={`row`}>
          {props.renderData.length === 0 && (
            <p className="col-md-12">
              Có Cái Nịt Đâu Mà Xem ,<Link to="/">Click</Link> để Add Sản Phẩm{" "}
            </p>
          )}

          {unique.map((each, index) => {
            return (
              <div key={index} className={`col-md-12`}>
                <div className={`row ${classes.setMb}`}>
                  <div className={`col-md-4`} style = {{display:"flex" , alignItems :'center' , justifyContent :'center'}}>
                    <img src={each.img} style={{ width: "50%" }} />
                  </div>
                  <div className={`col-md-4 ${classes.setAlig}`}>
                    <h2>{each.name}</h2>
                    <p>{+each.price * counter[`${each.id}`]}</p>

                    <div className={`${classes.upDown}`}>
                      <i
                        class="fas fa-angle-left"
                        onClick={()=>{
                          HandleDeleteEach(index)
                        }}
                      ></i>
                      <span>{counter[`${each.id}`]}</span>

                      <i class="fas fa-angle-right" onClick={() => {HandleAdd({
                          name: each.name,
                          price: each.price,
                          img: each.image,
                          id: each.id,
                        })}}></i>
                    </div>
                    <a href="" className={`${classes.Detail}`} onClick={(event)=>{
                        event.preventDefault()
                        handDetail(each.id)
                      }}>
                      Detail
                    </a>
                  </div>
                  <div className={`col-md-4 ${classes.iconClose}`}>
                    <i
                      className="fas fa-times"
                      onClick={() => {
                        handleDelete(each.id);
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
          {props.renderData.length > 0 && (
            <div
              className="col-md-12"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <span className={classes.priceTotal}
                style={{
                  padding: "20px",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                TOTAL : {HandleSum()}
              </span>
            </div>
          )}
          {props.renderData.length > 0 && (
            <div
              className="col-md-12"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <span className= {classes.detete}
                style={{
                  padding: "20px",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                onClick = {HandleClearAll}
              >
                Clear All Cart
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MyCart;

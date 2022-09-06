import Slideshow from "../Header/SlideShow"
import Card from "./Card"
import Iphone from "./Iphone"
import NewArrival from "./NewArrival"
import CountDown from "./CountDown"
import NewWatch from "./NewWatch"
import { useState , useEffect } from "react"
const Home = (props) => {
    const [productHome, setProductHome] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        setProductHome(data);
      });
  }, []);
    return (
        <div>
            <Slideshow />
            <Card renderAPI = {productHome}/>
            <Iphone renderAPI = {productHome} propsParentCountAdd = {props.CountAdd} propsParentSetCountAdd = {props.setCountAdd} propsParentListAdd = {props.ListAdd} propsParentSetListAdd = {props.setListAdd}/>
            <NewArrival renderAPI = {productHome} propsParentCountAdd = {props.CountAdd} propsParentSetCountAdd = {props.setCountAdd} propsParentListAdd = {props.ListAdd} propsParentSetListAdd = {props.setListAdd}/>
            <CountDown renderAPI = {productHome} />
            <NewWatch renderAPI = {productHome} propsParentCountAdd = {props.CountAdd} propsParentSetCountAdd = {props.setCountAdd} propsParentListAdd = {props.ListAdd} propsParentSetListAdd = {props.setListAdd}/>
        </div>
    )
}
export default Home
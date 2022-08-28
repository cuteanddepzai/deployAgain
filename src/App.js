import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes , Route } from 'react-router-dom';
import MyCart from './Components/MyCart/Mycart';
import Wishlist from './Components/Wishlist/Wishlist';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Shop from './Components/Shop/Shop';
import 'antd/dist/antd.css';
function App() {
  const [dataJs , setdataJs ] = useState([])
  const [CountAdd ,setCountAdd] = useState(()=>{
    return undefined ? 0 : JSON.parse(localStorage.getItem("CountAdd"))
  })
  const [ListAdd , setListAdd] = useState(()=>{
    const storageJobs = JSON.parse(localStorage.getItem("ListAdd"));
    return storageJobs ?? [];
  })
  localStorage.setItem('ListAdd',JSON.stringify(ListAdd))
  localStorage.setItem('CountAdd',JSON.stringify(CountAdd))
  const iPhoneData = dataJs.filter((each,index) => {
    return each.status === "iphone" && each.layout === "home";
  })
  const  MacData = dataJs.filter((each,index) => {
    return each.status === "laptop" && each.layout === "home";
  })
  console.log('iphone ' , iPhoneData)
  const titleMac = 'MacBook'
  const titleIphone = 'Iphone'
  return (
    <div className='App'>
      <Header CountAdd = {CountAdd} setdataJs = {setdataJs}/>
      <Routes>
        <Route path='/' element = {<Home CountAdd = {CountAdd} setCountAdd = {setCountAdd} ListAdd = {ListAdd}  setListAdd = {setListAdd}/>} />
        <Route path='/Wishlist' element = {<Wishlist />} />
        <Route path='/Mycart' element = { <MyCart renderData = {ListAdd}  setListAdd = {setListAdd} setCountAdd = {setCountAdd}/>} />
        <Route path='/detail/:id' element={<Detail renderData = {dataJs} CountAdd = {CountAdd} setCountAdd = {setCountAdd} ListAdd = {ListAdd}  setListAdd = {setListAdd}/>}/>
        <Route path='/Mac' element ={<Shop renderData = {MacData} title = {titleMac} CountAdd = {CountAdd} setCountAdd = {setCountAdd} ListAdd = {ListAdd}  setListAdd = {setListAdd}/>} />
        <Route path='/Iphone' element ={<Shop renderData = {iPhoneData} title = {titleIphone} CountAdd = {CountAdd} setCountAdd = {setCountAdd} ListAdd = {ListAdd}  setListAdd = {setListAdd}/>} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

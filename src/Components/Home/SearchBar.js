import React, { useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import '../Home/SearchBar.css'
function SearchBar({ placeholder, data }) {
  let navagitave = useNavigate()
  const handDetail = (id) =>{
    navagitave(`detail/${id}`)
  }
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [display , setDisplay] = useState(false)
  const handleFilter = (event) => {
    setDisplay(true)
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log(searchWord)
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          onBlur = {() => {setDisplay(false)}}
        />
      </div>
      {display && filteredData.length != 0 && (
        <div className = 'dataResult' onMouseDown={(e)=>{e.preventDefault()}} >
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href='' onClick={(event)=>{
                handDetail(value.id)
              }} >
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
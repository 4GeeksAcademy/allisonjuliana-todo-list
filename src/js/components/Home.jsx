import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const [inputValue, setInputValue] = useState("")
  const [all, setAll] = useState([]);

  return (
    <div className="container">
      <div className="titulo">
        <p>todos</p>
      </div>
      <div className="list">
        <div className="header"><input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              setAll(all.concat([inputValue]));
              setInputValue("");
            }
          }}
          placeholder="What needs to be done?"></input>
        </div>
        {all.map((item, index) => (
            <div className="items">
              {item}
              <button key={index} onClick={() => setAll(all.filter((t, currentIndex) => index != currentIndex))}><AiOutlineClose /></button>
            </div>
          ))
        }
        <div className="footer">
        {all.length} items left
        </div>

      </div>
      <div className="hoja2"></div>
      <div className="hoja3"></div>
    </div>
  );
};
 
export default Home;
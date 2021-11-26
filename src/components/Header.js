import React, {useState} from "react";

function Header({onDarkModeClick, isDarkMode}){
    function handleClick(){
        onDarkModeClick()
    }
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>

    )
}

export default Header;
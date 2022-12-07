import React from "react";
import Logo from "../img/logo.png";

const Header = () => {
    return (
        <div>
            <img className="logo-image" src={Logo} alt="Img not found" />
        </div>
    )
}

export default Header
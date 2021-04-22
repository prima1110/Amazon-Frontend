import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



function Header (){
    return (
    /*collapse nav, logo, search bar, country dropdown, 3 links, cart*/
    <nav className="header"> 
    <Link to="/">
        <img className="header__logo"
         src="./amazon.png"
          alt=""/>
    </Link>
    <div className="search">
    <input type="text" className="header__searchBar"/>
    <Link><SearchIcon className="header__searchIcon"></SearchIcon></Link>
    </div>
    <div className="headerLinks">
        {/*Sign-in*/}
        <Link to="/signin" className="header__link">
        <div className="header__selection">
            <p className="line1">Hello, Sign In</p>
            <p className="line2">Account & Lists</p>
        </div>
        </Link>
        {/*Orders and returns*/}
        <Link to="/" className="header__link">
        <div className="header__selection">
            <p className="line1">Return</p>
            <p className="line2">& Orders</p>
        </div>
        </Link>
        {/*Prime member*/}
        <Link to="/" className="header__link">
        <div className="header__selection">
            <p className="line1">Try</p>
            <p className="line2">Prime</p>
        </div>
        </Link>
        {/*Cart*/}
        <Link to="/cart" className="header__link">
        <div className="header__cart">
            <ShoppingCartIcon/>
            <p className="line2 cart__count">0</p>
        </div>
        </Link>
    </div>
    
    </nav>
    

    );
}


export default Header;

import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import {Link} from "react-router-dom";
import "./Navigation.css";




function Navigation() {
    return (
        <nav className="navbar">
            <div className="address">
            <Link className="nav_links">
                <div className="address_icon">
                    <RoomIcon/>
                    <span className="add1">Hello</span>
                    <span className="navline2">Select your address</span>
                </div>
            </Link>
            </div>
            <Link className="nav_links" to="/bestseller">
            <div className="navbar_selection">
                <p className="line1">Bestsellers</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">Deals Store</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">New Releases</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">Gift Ideas</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">Electronics</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">Customer Service</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">Home</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">Computers</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="line1">Gift Cards</p>
                </div>
            </Link>
            <Link className="nav_links"to="/allProducts">
            <div className="navbar_selection">
                <p className="line1">Products</p>
                </div>
            </Link>
            <Link className="nav_links">
            <div className="navbar_selection">
                <p className="bigfont">New deals everyday</p>
                </div>
            </Link>
            
        </nav>
    )
}

export default Navigation;

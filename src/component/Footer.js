import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer(){
    return (
        <div className="footer">
            <Link to="/"className="flink1">
            <p>Back to top</p>
            </Link>
            <div className="footer_links">
                <p className="heading">Get to Know Us</p>
                <p>Careers</p>
                <p>Amazon and our planet</p>
                <p>Investor relations</p>
                <p>Press releases</p>
            </div>
            <div className="footer_links">
                <p className="heading">Make Money with Us</p>
                <p>Sell on Amazon</p>
                <p>Sell Under Amazon Accelerator</p>
                <p>Amazon Associates</p>
                <p>Sell on Amazon Handmade</p>
                <p>Advertise Your Products</p>
                <p>Independently Publish with Us</p>
                <p>Host an Amazon Hub</p>
            </div>
            <div className="footer_links">
                <p className="heading">Amazon Payment Products</p>
                <p>Amazon.ca Rewards Mastercard</p>
                <p>Shop with Points</p>
                <p>Reload Your Balance</p>
                <p>Amazon Currency Converter</p>
                <p>Gift Cards</p>
                <p>Amazon Cash</p>
            </div>
            <div className="footer_links">
                <p className="heading">Let Us Help You</p>
                <p>COVID-19 and Amazon</p>
                <p>Shipping Rates and Policies</p>
                <p>Amazon Prime</p>
                <p>Returns Are Easy </p>
                <p>Manage your Content and Devices</p>
                <p>Customer Service</p>
            </div>
            
        </div>
    )
}

export default Footer;

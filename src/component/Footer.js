import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer(){
    return (
        <div className="footer">
            
            <div className="footer_links">
                <p className="heading">Get to Know Us</p>
                <p>Careers</p>
                <p>Amazon and our planet</p>
                <p>Investor relations</p>
                <p>Press releases</p>
            </div><br></br>
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
            
            
        </div>
    )
}

export default Footer;

import React from "react";
import "./Product.css";

const Product = ({image,title,cost,category,bestseller}) => {


const imagePath = `${image}`;

    return (
        <div className="first-div">
            <div className="second-div">
                <img src={imagePath} alt=""/><br/>
                <h3>Title: {title}</h3><br/>
                <p>Cost: <b>{cost}</b></p><br/>
                <p>Category: <b>{category}</b></p>
            </div><br/>
        </div>
    )
}

export default Product;

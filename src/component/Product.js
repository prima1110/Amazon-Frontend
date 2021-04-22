import React from "react";
import "./Product.css";

const Product = ({image,title,cost,category,bestseller}) => {


const imagePath = `${image}`;

    return (
        <div className="margin">

        
        <div className="product">
            <div className="card">
                <img src={imagePath} alt="" className="img"/><br/>\
                <div className="details">
                <h3>Title: {title}</h3><br/>
                <p>Cost: <b>{cost}</b></p><br/>
                <p>Category: <b>{category}</b></p>
                </div>
                
            </div><br/>
        </div>
        <hr></hr>
        </div>
    )
}

export default Product;

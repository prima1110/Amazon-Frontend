import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";
import Product from './Product';
import axios from "axios";
import "./Category.css";


function DisplayProducts(){
    const[pitems, setpitems] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/products/all')
      .then((response) =>{
          setpitems(response.data.body)
      })
    }, [])


    return (
        <div className="container">
             {pitems.map(products=>(
                <div>
                    <Link to={{state:{id:products.id}, pathname:'/productDetails'}}>
                    <Product
                        id={products.id}
                        image={products.image}
                        title={products.title}
                        cost={products.cost}
                        category={products.category}
                    />
                    </Link>
                </div>
            ))}
        </div>
    )
}


export default DisplayProducts;
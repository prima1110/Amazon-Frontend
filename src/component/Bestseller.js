import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Product from './Product';
import axios from "axios";

const Bestseller = () => {

    const[pitems, setpitems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products/bestseller')
        .then((response) =>{
            setpitems(response.data.body)
        })
      }, [])

    return(
        <div>
            {pitems.filter(i=>i.bestseller===true).map(products=>(
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

export default Bestseller

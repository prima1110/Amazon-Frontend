import React, {useState, useEffect} from "react";
import { useLocation, Link} from "react-router-dom";
import Product from './Product';
import axios from "axios";
import "./Category.css";

function Category() {

    const[pitems, setpitems] = useState([]);
    let location  = useLocation();

    useEffect(() => {
      axios.post('http://localhost:5000/products/category',{
          "category":location.state.name
      })
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

export default Category;

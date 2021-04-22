import React, {useState, useEffect} from "react";
import axios from "axios";
import { useLocation} from "react-router-dom";
import './ProductSpec.css'

function ProductSpecification(){

    const[pitems, setpitems] = useState([]);

    let location = useLocation();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${location.state.id}`)
        .then((response) => 
        {
            console.log(response.data.body);
          setpitems(response.data.body[0]);
        });
     }, []);

    
  const imgPath=`${pitems.image}`;
  console.log(pitems);

  return(
      <div>
          <img src={imgPath} alt="ProductImage" className="img"/>
          <h3><b>Title:</b> {pitems.title}</h3>
          <p>Description: {pitems.description}</p>
          <h5 style={{color: "tomato"}}>Cost: <i>{pitems.cost}</i></h5>
          <button style={{backgroundColor: "yellowgreen"}}>Add to Cart</button>
      </div>
  )
}

export default ProductSpecification;
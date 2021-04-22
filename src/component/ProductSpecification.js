import React, {useState, useEffect} from "react";
import axios from "axios";
import { useLocation} from "react-router-dom";

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
          <img src={imgPath} alt="ProductImage"/>
          <p>Title: {pitems.title}</p>
          <p>Description: {pitems.description}</p>
          <p>Cost: {pitems.cost}</p>
          <button>Add to Cart</button>
      </div>
  )
}

export default ProductSpecification;
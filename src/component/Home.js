import React from "react";
import Product from './Product';
import { Link} from "react-router-dom";
import "./Home.css";

function Home(){

    const imageElec = `/jbl.jpg`;
    const imageBeauty = `/mamaearth.jpg`;
    const imageBooks = `/mindfulness.jpg`;
    const imageGames = `/scrabble.jpg`;

    return(
        <div className="homeSection">
            <div className="categorySection">
                <Link to={{state:{name: 'Electronics'}, pathname:"Category"}}>
                    <div className="catDiv">
                        <div className="catInfo">
                            <h4>Electronics</h4>
                        </div>
                        <img src={imageElec} alt="" />
                    </div>
                </Link>

                <Link to={{state:{name: 'Beauty'}, pathname:"Category"}}>
                    <div className="catDiv">
                        <div className="catInfo">
                            <h4>Beauty</h4>
                        </div>
                        <img src={imageBeauty} alt=""/>
                    </div>
                </Link>

                <Link to={{state:{name: 'Books'}, pathname:"Category"}}>
                    <div className="catDiv">
                        <div className="catInfo">
                            <h4>Books</h4>
                        </div>
                        <img src={imageBooks} alt=""/>
                    </div>
                </Link>

                <Link to={{state:{name: 'Games'}, pathname:"Category"}}>
                    <div className="catDiv">
                        <div className="catInfo">
                            <h4>Games</h4>
                        </div>
                        <img src={imageGames} alt=""/>
                    </div>
                </Link>

            </div>
        </div>
    )

}   
    


export default Home;

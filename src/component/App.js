import React from "react";
import "../App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./header";
import Navigation from "./Navigation";
import Home from "./Home";
import Footer from "./Footer";
import Signin from "./Signin";
import Signup from "./Signup";
import Product from "./Product";
import ProductSpecification from "./ProductSpecification";
import DisplayProducts from './DisplayProducts';
import Bestseller from "./Bestseller";
import Category from "./Category";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/signin">
        <Header />
             <Navigation />
          <Signin />
          <Footer /> 
        </Route>

        <Route path="/signup">
        <Header />
             <Navigation />
          <Signup />
          <Footer /> 
        </Route>

        <Route path="/allProducts">
            <Header />
             <Navigation />
            <DisplayProducts/>
            <Footer /> 
        </Route>

        <Route path="/productDetails">
            <Header />
             <Navigation />
            <ProductSpecification/>
            <Footer /> 
        </Route>

        
        <Route path="/bestseller">
            <Header />
             <Navigation />
            <Bestseller/>
            <Footer /> 
        </Route>

        <Route path="/Category">
            <Header />
             <Navigation />
            <Category/>
            <Footer /> 
        </Route>

        <Route path="/">
          <Header />
          <Navigation />
          <Home />
          <Footer />     
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;

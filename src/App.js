import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./style.css";

import {Routes, Route, HashRouter as Router} from 'react-router-dom';
import Header from "./components/Header";
import LandingProductsListing from "./components/LandingProductsListing";
import ProductPage from "./components/ProductPage";
import ProductsListingPage from "./components/ProductsListingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="textWhite">
      <Router>

        <Header/>

        <Routes>
          <Route path="/" Component={LandingProductsListing}></Route>
          <Route path="/productPage" Component={ProductPage}></Route>
          <Route path="/productsListing" Component={ProductsListingPage}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={SignUp}></Route>
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Product from "./Product";
import Toolbar from "./Toolbar";
import Cover from "./Cover";
import Footer from "../../components/Layouts/Footer";

const Shop = () => (
    <div>
        <Navbar />
        <div className="main">
            <Cover />
            <Toolbar />
            <hr className="divider-w" />
            <Product />
        </div>
        <Footer />
    </div>
);

export default Shop;

import React, { useEffect } from "react";
import Navbar from "../../components/Layouts/Navbar";
import ProductList from "./ProductList";
import Footer from "../../components/Layouts/Footer";
import { fetchProducts } from "../../store/logic/product";
import { connect } from "react-redux";

const Shop = ({ fetchProducts }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div>
            <Navbar />
            <div className="main" style={{ minHeight: "872px" }}>
                {/* <Toolbar /> */}
                <hr className="divider-w" />
                <ProductList />
            </div>
            <Footer />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(null, mapDispatchToProps)(Shop);

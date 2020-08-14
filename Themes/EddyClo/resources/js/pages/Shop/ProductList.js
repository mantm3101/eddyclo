import React from "react";
import Product from "./Product";
import { connect } from "react-redux";

const ProductList = ({ products }) => (
    <section className="module-small">
        <div className="container">
            {products.map(p => (
                <Product product={p} />
            ))}
        </div>
    </section>
);

const mapStateToProps = state => ({
    products: state.products.data
});

export default connect(mapStateToProps)(ProductList);

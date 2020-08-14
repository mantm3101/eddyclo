import React from "react";
import { formatCurrency } from "../../../utils/helpers";

const Product = ({ product }) => (
    <div className="row multi-columns-row">
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="shop-item">
                <div className="shop-item-image">
                    <img src={product.image} alt="Image" />
                    <div className="shop-item-detail">
                        {/* <a className="btn btn-round btn-b">
                            <span className="icon-basket">Add To Cart</span>
                        </a> */}
                    </div>
                </div>
                <h4 className="shop-item-title font-alt">
                    {product.name}
                    {/* <a href="#">{product.name}</a> */}
                </h4>
                {formatCurrency(product.price)}
            </div>
        </div>
    </div>
);

export default Product;

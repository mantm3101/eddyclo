import React from "react";

const Cover = () => (
    <section className="module bg-dark-60 shop-page-header"
        style={{
            height: "580px",
            backgroundImage: "url('../themes/eddyclo/images/shop/product-page-bg.jpg')"
        }}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <h2 className="module-title font-alt">Shop Products</h2>
                    <div className="module-subtitle font-serif">Welcome to EddyClo.</div>
                </div>
            </div>
        </div>
    </section>
);

export default Cover;

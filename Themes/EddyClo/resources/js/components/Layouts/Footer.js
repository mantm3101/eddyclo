import React from "react";

const Footer = () => (
    <div className="module-small bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="widget">
                        <h5 className="widget-title font-alt">About Titan</h5>
                        <p>The languages only differ in their grammar, their pronunciation and their most common words.</p>
                        <p>Phone: +1 234 567 89 10</p>Fax: +1 234 567 89 10
                  <p>Email:<a href="#">somecompany@example.com</a></p>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="widget">
                        <h5 className="widget-title font-alt">Recent Comments</h5>
                        <ul className="icon-list">
                            <li>Maria on <a href="#">Designer Desk Essentials</a></li>
                            <li>John on <a href="#">Realistic Business Card Mockup</a></li>
                            <li>Andy on <a href="#">Eco bag Mockup</a></li>
                            <li>Jack on <a href="#">Bottle Mockup</a></li>
                            <li>Mark on <a href="#">Our trip to the Alps</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="widget">
                        <h5 className="widget-title font-alt">Blog Categories</h5>
                        <ul className="icon-list">
                            <li><a href="#">Photography - 7</a></li>
                            <li><a href="#">Web Design - 3</a></li>
                            <li><a href="#">Illustration - 12</a></li>
                            <li><a href="#">Marketing - 1</a></li>
                            <li><a href="#">Wordpress - 16</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="widget">
                        <h5 className="widget-title font-alt">Popular Posts</h5>
                        <ul className="widget-posts">
                            <li className="clearfix">
                                <div className="widget-posts-image"><a href="#"><img src="../themes/eddyclo/images/rp-1.jpg" alt="Post Thumbnail" /></a></div>
                                <div className="widget-posts-body">
                                    <div className="widget-posts-title"><a href="#">Designer Desk Essentials</a></div>
                                    <div className="widget-posts-meta">23 january</div>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="widget-posts-image"><a href="#"><img src="../themes/eddyclo/images/rp-2.jpg" alt="Post Thumbnail" /></a></div>
                                <div className="widget-posts-body">
                                    <div className="widget-posts-title"><a href="#">Realistic Business Card Mockup</a></div>
                                    <div className="widget-posts-meta">15 February</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;

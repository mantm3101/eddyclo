import React from "react";

const Footer = () => (
    <footer class="footer bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <p class="copyright font-alt">EDDYCLO</p>
                </div>
                <div class="col-sm-6">
                    <div class="footer-social-links">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/eddyclo.vn/?modal=admin_todo_tour"
                        >
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.youtube.com/channel/UCHd9fKzQHKmuh7S-t3D6T4A?view_as=subscriber"
                        >
                            <i class="fa fa-youtube-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

import React from "react";
import Navbar from "../components/Layouts/Navbar";

const Home = () => (
    <div>
        <Navbar />
        <section class="home-section home-full-height bg-dark-30" id="home"
            style={{
                height: "1080px"
            }}>
            <iframe style={{
                height: "100%",
                width: "100%",
            }} src="https://player.vimeo.com/video/413893674?autoplay=1&background=1&loop=1&controls=0" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
        </section>
        

    </div>
);

export default Home;
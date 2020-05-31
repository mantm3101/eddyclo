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
            }} src="https://www.youtube.com/embed/T0sHaz4H9MQ?autoplay=0" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
        </section>


    </div>
);

export default Home;
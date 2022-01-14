import React from "react"
import Vehicles from "./Vehicles"
import People from "./People"
import Planets from "./Planets"
import '../App.css';



const Home = () => {
    return (
        <div className="container">
            <div className="home-main">
                <div className="display-3 my-4 py-5">STAR WARS BLOG</div>
                <p className="lead my-3 mb-5 py-5">
                    A long time ago, in a galaxy far, far away, there was a blog were you could find the characters, vehicles and places of the greatest story ever told... 
                </p>

                <p className="lead my-3 mb-5 py-5">
                    Welcome to the STAR WARS blog
                </p>
            </div>

            
            <div className="display-5 text-start py-2 mt-5 ms-4 mb-3">people</div>
            <People />
            <div className="display-5 text-start ms-4 mb-3">vehicles</div>
            <Vehicles />
            <div className="display-5 text-start ms-4 mb-3">planets</div>
            <Planets />

        </div>
    )
}

export default Home
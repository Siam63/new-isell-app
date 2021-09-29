import React from 'react';
import '../Stylesheets/Homepage.css';

function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage-searchbar-container">
                <input class="homepage-searchbar" placeholder="Search for something..."></input>
            </div>
            <div className="homepage-title">
                <h1>Popular on iSell...</h1>
            </div>
            <div className="homepage-popular-title-container">
                <h2 className="homepage-popular-title">Free Things</h2>
                <h2 className="homepage-popular-title">Pets</h2>
                <h2 className="homepage-popular-title">Sporting Gear</h2>
                <h2 className="homepage-popular-title">Freelancing / Business</h2>
            </div>
            <div className="homepage-footer-container">
                <div>
                    <h2 className="homepage-footer-title">What's Trending Right Now?</h2>
                </div>
                <div className="homepage-image-container">
                    <div >
                        <h1 className="homepage-image"></h1>
                        <h2 className="homepage-image-title">Title 1</h2>
                    </div>
                    <div>
                        <h1 className="homepage-image"></h1>
                        <h2 className="homepage-image-title">Title 2</h2>
                    </div>
                    <div>
                        <h1 className="homepage-image"></h1>
                        <h2 className="homepage-image-title">Title 3</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;

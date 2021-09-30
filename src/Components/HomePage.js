import React from 'react';
import '../Stylesheets/Homepage.css';

const freeThingsImg = "https://topfreebies.com/wp-content/uploads/2020/10/bigstock-Free-Stuff-84409235.jpg";
const toysGamesImg = "https://g.foolcdn.com/editorial/images/544149/toys-and-games.jpg";
const vehicleImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vehicle-types-1548954237.jpg";
const businessImg = "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/10/business_with_esa/21093947-3-eng-GB/Business_with_ESA_pillars.jpg";

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
                        <img src={freeThingsImg} alt="free things icon" className="homepage-image"></img>
                        <h2 className="homepage-image-title">Free Things</h2>
                    </div>
                    <div>
                        <img src={toysGamesImg} alt="toys and games icon" className="homepage-image"></img>
                        <h2 className="homepage-image-title">Toys & Games</h2>
                    </div>
                    <div>
                        <img src={vehicleImg} alt="vehicle icon" className="homepage-image"></img>
                        <h2 className="homepage-image-title">Vehicles</h2>
                    </div>
                    <div>
                        <img src={businessImg} alt="business icon" className="homepage-image"></img>
                        <h2 className="homepage-image-title">Business</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;

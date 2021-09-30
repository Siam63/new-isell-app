import React from 'react';
import '../Stylesheets/MyPostServiceCard.css';

function MyPostServiceCard({post}) {
    console.log(post);
    return (
        <div className="my-post-service-card">
            <div className="card-containers-container">
                <div className="card-container">
                    <div>
                        <h2 className="postcard-image">Image1</h2>
                    </div>
                    <div>
                        <h2 className="postcard-image">Image2</h2>
                    </div>
                    <div>
                        <h2 className="postcard-image">Image3</h2>
                    </div>
                    <div>
                        <h2 className="postcard-image">Image4</h2>
                    </div>
                </div>
                <div className="postcard-text-container">
                    <div className="postcard-title-container">
                        <h2 className="postcard-text">{post.title}</h2>
                    </div>
                    <div className="postcard-description-container">
                        <h2 className="postcard-description-text">{post.desc}</h2>
                    </div>
                    <div className="postcard-condition-container">
                        <h2 className="postcard-text">{post.condition}</h2>
                    </div>
                    <div className="postcard-price-container">
                        <h2 className="postcard-price-text">{post.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPostServiceCard;

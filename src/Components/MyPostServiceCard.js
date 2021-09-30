import React from 'react';
import '../Stylesheets/MyPostServiceCard.css';

function MyPostServiceCard({post}) {
    return (
        <div className="my-post-service-card">
            <div className="card-containers-container">
                <div className="card-container">
                    <div>
                        <img src={post.picture1} class="post-image"></img>
                    </div>
                    <div>
                        <img src={post?.picture2} class="post-image"></img>
                    </div>
                    <div>
                        <img src={post?.picture3} class="post-image"></img>
                    </div>
                    <div>
                        <img src={post?.picture4} class="post-image"></img>
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
                        <h2 className="postcard-price-text">${post.price}.00</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPostServiceCard;

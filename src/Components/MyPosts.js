import React from 'react';
import '../Stylesheets/MyPosts.css';

function MyPosts() {
    return (
        <div className="myposts">
            <div>
                <div className="myposts-image-container">
                    <h2 className="myposts-image">Add Image</h2>
                    <h2 className="myposts-image">Add Image</h2>
                    <h2 className="myposts-image">Add Image</h2>
                    <h2 className="myposts-image">Add Image</h2>
                </div>
                <div className="myposts-container">
                    <div className="post-title-container">
                        <div className="post-title">
                            <h2 className="mypost-title">Title</h2>
                        </div>
                        <div className="post-title-input">
                            <input class="post-input" placeholder="Item Title"></input>
                        </div>
                    </div>
                    <div className="post-discription-container">
                        <div className="post-discription-title">
                            <h2 className="mypost-title">Discription</h2>
                        </div>
                        <div className="post-discription-input">
                            <textarea placeholder="Item Description" rows="20" cols="80" id="DESCRIPTION"></textarea>
                        </div>
                    </div>
                    <div className="post-condition-container">
                        <div className="post-title">
                            <h2 className="mypost-title">Condition</h2>
                        </div>
                        <div className="post-condition-input">
                            <input class="post-input" placeholder="Item Condition"></input>
                        </div>
                    </div>
                    <div className="post-price-container">
                        <div className="post-price">
                            <h2 className="mypost-title">Price</h2>
                        </div>
                        <div className="post-price-input">
                            <input class="post-price-input" placeholder="$0.00"></input>
                        </div>
                    </div>
                </div>
                <div className="post-btn-container">
                    <div>
                        <button className="post-submit-btn">Cancel</button>
                    </div>
                    <div>
                        <button className="post-cancel-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;

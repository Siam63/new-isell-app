import React from 'react';
import '../Stylesheets/MyPosts.css';
import MyPostServiceCard from './MyPostServiceCard';

function MyPosts() {
    return (
        <div className="myposts">
            <div>
                <h2>My Posts</h2>
            </div>
            <div>
                <MyPostServiceCard/>
            </div>
        </div>
    )
}

export default MyPosts;

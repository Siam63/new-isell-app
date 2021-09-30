import React from 'react';
import '../Stylesheets/MyPosts.css';
import MyPostServiceCard from './MyPostServiceCard';
import { Posts } from '../DummyData';

function MyPosts() {
    return (
        <div className="myposts">
            <div>
                <h2>My Posts</h2>
            </div>
            <div>
                {Posts.map((p) => (
                    <MyPostServiceCard key={p.id} post={p}/>
                ))}
            </div>
        </div>
    )
}

export default MyPosts;

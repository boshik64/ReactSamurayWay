import React from 'react';
import AddPost from './AddPost/AddPost';
import './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            MyPosts
            <AddPost />
            <div className="posts">
                <Post postText='Пост №1' />
                <Post postText='Второй пост' />
                <Post postText='трёшка' />
                <Post postText={`В скобках`} />
            </div>

        </div>
    );
}

export default MyPosts;
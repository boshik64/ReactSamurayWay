import React from 'react';
import post from './Post.module.css'


const Post = (props) => {
    return (

        <div className={post.item}>
            <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Flushed_Face_Emoji_large.png?v=1571606037" alt="" />
            <p>{props.postText}</p>
        </div>

    );
}

export default Post;
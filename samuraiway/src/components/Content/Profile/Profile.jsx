import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.module.css';


const Profile = () => {
    return (
        <div className='profile'>
            <MyPosts />
        </div>
    );
}

export default Profile;
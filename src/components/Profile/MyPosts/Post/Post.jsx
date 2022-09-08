import React from 'react';
import prof from './Post.module.css';

const Post = (props) =>
{
    return    <div className={prof.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxRbiy_JctIh3UffWqM1lNHQvZOiU4lQjAA&usqp=CAU'/>
         {props.message}
          <div><span>like: {props.like}</span></div>
          
        </div>
        
       
}

export default Post;
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) =>
{
  
 
  let postsElements = props.posts.map( p => <Post message={p.message} like={p.like}/>)
    return   <div className={s.postsBlock}>
        My posts
        <div className={s.posts}>
          <div>
          <textarea></textarea>
          </div>
          <div>
          <button>Add post</button>
          <button>Remove</button>
          </div>
        </div>
        <div className={s.posts}>
       {postsElements}
       
      </div>
  </div>
}

export default MyPosts;
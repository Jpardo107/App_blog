import React from 'react';
import posts from '../data/posts';
import { useParams, Navigate } from 'react-router-dom';
import Controles from './Controles'


const Post = () => {
  const {id} = useParams()
  return ( 
    <>
      {posts[id-1] ?
        <div>
          <h1>{posts[id - 1].titulo}</h1>
          <p>{posts[id - 1].texto}</p>
          <Controles />
        </div>
       : 
        <Navigate replace to ='/' />
       }
      
    </>
    
   );
}
 
export default Post;
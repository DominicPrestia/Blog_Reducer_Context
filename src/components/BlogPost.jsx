import React, { useContext } from 'react'
import { BlogContext } from '../App';




const BlogPost = () => 
{

    const blogInput = useContext(BlogContext);

  return (
    <>
    <h4>BlogPost Component Title</h4>
    <form onSubmit={blogInput.handleSubmit}>
    <label>Title: </label>
    <input
    placeholder="Enter Blog Title"
    onChange={e => blogInput.setTitle(e.target.value)}
    />
    <br/>
      <label>Author: </label>
    <input
    placeholder="Enter Author"
    onChange={e => blogInput.setAuthor(e.target.value)}
    />
    <br/>
    <button>Add Post</button>
    <button onClick={e=> blogInput.setLoggedIn(false)}>Logout</button>
    </form>
    </>
  )
}

export default BlogPost 
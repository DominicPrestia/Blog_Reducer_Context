import React from 'react'
import BlogPost from './BlogPost'


const Blog = ({ dispatch, title, author, id }) => {

    return (
        <>
            <h4>Blog Component Title</h4>
            <h5>Title: {title}</h5>
            <h5>Author: {author}</h5>
            <h6>ID: {id}</h6>
            <button type='button' onClick={e => {
                dispatch({
                    type: 'delete',
                    payload: { id: id }
                })}
            }>Delete 
            </button>

        </>
    )
}

export default Blog
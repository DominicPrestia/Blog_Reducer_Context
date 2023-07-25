import { useState, createContext, Reducer, useReducer} from "react";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

export const BlogContext = createContext();


function reducer(currentState,action){
  console.log("Hello Reducer")

  if (action.type === 'Post')
  {
    let newBlog = {
      title: action.payload.title,
      author: action.payload.author,
      id: Date.now()
    }
    let newListState = [newBlog, ...currentState]
    return newListState

  }
  else if (action.type ==='delete')
  {
    let filteredList = currentState.filter(blogs => blogs.id !== action.payload.id)
    return filteredList;
  }

}

function App() {
  
let [title,setTitle] = useState('')
let [author,setAuthor] = useState('')
let [blog, dispatch] = useReducer(reducer,[])
let blogInput = {title,setTitle,author,setAuthor,handleSubmit}

function handleSubmit(e)
{
    e.preventDefault();
    dispatch({type: 'Post', 
    payload: {title,author}

  })
}

  return (
    <>
      <BlogContext.Provider value={blogInput}>
        <h1>Blog Application Component Title</h1>
        <BlogPost/>
      </BlogContext.Provider>

      {blog.map(postList =>{
        return <Blog dispatch={dispatch} title={postList.title} author = {postList.author} id={postList.id}/>
      })}


    </>
  );
}

export default App;

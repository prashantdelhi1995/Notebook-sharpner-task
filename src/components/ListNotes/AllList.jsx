import { useContext, useState, useEffect } from "react"
import React from 'react'
import UserContext from "../../utils/UserContext"

function AllList(props) {
  let post=useContext(UserContext)
  function handleDelete(i){
    props.onDelete(i)

  }
  function handleUpdate(i){
    props.onUpdate(i)

  }
  return (
    <div>
        {/* <ul>
        {post.map((p,i)=>(<li key={i}>{`${p.title} --> ${p.desc}`}
          <button onClick={() => handleDelete(i)}>delete</button>
          <button onClick={() => handleUpdate(i)}>update</button>
          </li>))}
            
        </ul> */}
        {post.map((p,i)=>( <div key={i}>
          <h1>{p.title}</h1>
          <p>{p.desc}</p>
          <button onClick={() => handleDelete(i)}>delete</button>
          <button onClick={() => handleUpdate(i)}>update</button>

        </div>

        ))}
    </div>
  )
}

export default AllList
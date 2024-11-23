import React,{useState, useEffect} from 'react'
import classes from "./NewNotes.module.css"


function NewNotes({ onAdd, onClose, editData, isEditing,  }) {
    const [post, setPost]=useState({title:"", desc:""});
    useEffect(() => {
        if (editData) {
          setPost(editData);
        }
      }, [editData]);
    const handleChange=(event)=>{
        const {name, value}=event.target
        
        setPost((prevValue)=>{
            return {...prevValue,[name]:value}
        })

    }
    function handleSubmit(){
        
        onAdd(post)
        setPost({title:"",desc:""})

    }
    function handleClose(){
      onClose(false)

    }
    

  return (
    <>
    <div className={classes.heading}>
    <div>{isEditing ? "Edit Notes" : "Add New Notes"}</div>
        <div>
            <div className={classes.child}>
            <label htmlFor="newTitle">New title:</label>
            <input name="title" onChange={handleChange} value={post.title} type="text" id="newTitle"></input>
            </div>
            <div className={classes.child}>
            <label htmlFor="newDescription">Description:</label>
            <textarea
                name="desc"
                onChange={handleChange}
                value={post.desc}
                id="newDescription"
                placeholder="Enter description"
                rows="4" 
                cols="50" 
                ></textarea>

            </div>
            <div className={classes.child} style={{display:'flex', justifyContent:'space-bteween'}}>
            <button onClick={handleSubmit}> {isEditing ? "Update Notes" : "Add Notes"}</button>
            <button onClick={handleClose} >close</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewNotes
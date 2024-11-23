import React from 'react'
import classes from "./Layout.module.css";
import UserContext from "../../utils/UserContext";
import { useContext, useState } from "react";
import AllList from '../ListNotes/AllList';

function Layout(props) {
  // let {userList, filterUserList} = useContext(UserContext)
  const [searchElement, setSearchElement]=useState("");
  function handleOnChange(event){
    let updatedValue=event.target.value
    setSearchElement(updatedValue)
    props.searchVal(updatedValue)
    }
    function handleAddNotes (){
      props.onAddNewPost(true)

    }


  return (
    <div>
    <div className={classes.header}>
        <h1>NoteBook</h1>
        <label htmlFor="search">Search Notes
        <input onChange={handleOnChange} value={searchElement}
         name="search" id="search"
          type="text"></input></label>
        <p>total notes :{props.userListLength}</p>
        <p>showing :{props.filterLength}</p>
        <button onClick={handleAddNotes}> Add New Notes </button>
        
        
        </div>
      
        </div>
  )
}

export default Layout

import Layout from './components/UI/Layout' ;
import UserContext from "./utils/UserContext.js";
import NewNotes from './components/AddNotes/NewNotes';
import AllList from './components/ListNotes/AllList';
import { useState, useEffect } from 'react';



function App() {

  const [userList, setUserList]= useState([])
  const[addItem, setAddItem]=useState(false)

  const [filterUserList,setFilterUserList]=useState(userList)
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [editData, setEditData] = useState({ title: "", desc: "" });
  useEffect(() => {
    setFilterUserList(userList);
  }, [userList]);

  function handleOnAdd(val){
    if (currentEditIndex === null) {
      
      setUserList((prevValue) => [...prevValue, val]);
    } else {
      
      const updatedNotes = userList.map((note, i) =>
        i === currentEditIndex ? val : note
      );
      setUserList(updatedNotes);
      setCurrentEditIndex(null); 
      setEditData({ title: "", desc: "" });
    }
    
 
    

  }
  function changeValue(val){
    setFilterUserList(userList.filter((user)=>(user.title.toLowerCase()).includes(val)))

  }
  function handleUpdate(index){
    
    setCurrentEditIndex(index);
    setEditData(userList[index]);
    setAddItem(true)

  }
  function handleDelete(index){
    const updatedNotes = userList.filter((_, i) => i !== index);
    setUserList(updatedNotes);
    
  }
  
 


  return (
    <>
   <UserContext.Provider value={filterUserList}>
   <Layout onAddNewPost={setAddItem} searchVal={changeValue} filterLength={filterUserList.length} 
   userListLength={userList.length}/>
   {addItem && <NewNotes onAdd={handleOnAdd} onClose={setAddItem} editData={editData}
          isEditing={currentEditIndex !== null}/> }
   <AllList onUpdate={handleUpdate} onAddNotes={setAddItem} onDelete={handleDelete} />
  

   </UserContext.Provider>
      
    </>
  )
}

export default App

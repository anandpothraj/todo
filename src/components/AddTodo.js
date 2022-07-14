import React, { useState }  from 'react';
import {  useDispatch } from 'react-redux';
import { GrAdd } from "react-icons/gr"; // For Add
import { FiEdit } from "react-icons/fi"; // For Edit
import { createTodo, updateTodo } from '../redux/todo/todoActions';

const AddTodo = ({showEditButton,setShowEditButton, task, setTask , selectedId, setSelectedId}) => {

  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  const status = "normal";

  const addTodo = (e) => {
    e.preventDefault();
    if(!task){
        alert('Plz fill the task')
    }
    else if(task && showEditButton){
        dispatch(updateTodo(selectedId,task));
        setTask("");
        setShowEditButton(false);
        setSelectedId(null);
    }
    else{
        dispatch(createTodo(id,task,status));
        setId(id+1);
        setTask("");
    }
}

  return (
    <>
        <div className="addTask">
                <input type="text" autoComplete="off" placeholder="Add New Task" className="addTaskInput" value={task} onChange={(e) => setTask(e.target.value)}/>
                <div className="btnDiv">
                    { showEditButton ?
                        <button type="submit" className="submitBtn" onClick={addTodo} ><FiEdit/></button>
                        :
                        <button type="submit" className="submitBtn" onClick={addTodo} ><GrAdd/></button>
                    }
                </div>
            </div>
    </>
  )
}

export default AddTodo
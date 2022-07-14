import React from 'react';
import { useDispatch } from 'react-redux';
import { IoMdDoneAll } from "react-icons/io"; // For Completed
import { TbHandStop } from "react-icons/tb"; // For Hold
import { GoAlert } from "react-icons/go"; //For Important
import { FiEdit } from "react-icons/fi"; // For Edit
import { RiDeleteBin5Line } from "react-icons/ri";  // For Delete
import { deleteTodo, completeStatus, onHoldStatus, urgentStatus } from '../redux/todo/todoActions';

const SingleTodo = ({showEditButton,editTodo,todo}) => {

    const dispatch = useDispatch();

    const removeTodo = (id) => {
        dispatch(deleteTodo(id));
    }

    const taskCompleted = (id) => {
        dispatch(completeStatus(id))
    }

    const taskOnHold = (id) => {
        dispatch(onHoldStatus(id))
    }

    const taskUrgent = (id) => {
        dispatch(urgentStatus(id))
    }
  return (
    <>
    <li className={`${todo.status} taskListItem`} key={todo.id}>
        <label className="taskListItemLabel">
            <input type="checkbox"/>
            <span className="listSpan">{todo.task}</span>
        </label>
        <div className="logoDiv">
            {
                !showEditButton ? 
                <>
                    <span className="completedBtn" onClick={()=>{taskCompleted(todo.id)}} ><IoMdDoneAll className='completedLogo' onClick={()=>{taskCompleted(todo.id)}}/></span>
                    <span className="holdBtn" onClick={()=>{taskOnHold(todo.id)}}><TbHandStop className='holdLogo' onClick={()=>{taskOnHold(todo.id)}} style={todo.status === "onhold" ? {color:"white"}: {color:"orange"}}/></span>
                    <span className="importantBtn" onClick={()=>{taskUrgent(todo.id)}}><GoAlert className='importantLogo' onClick={()=>{taskUrgent(todo.id)}}  style={{color:"yellow"}}/></span>
                    <span className="editBtn" onClick={()=>{editTodo(todo.id,todo.task)}}><FiEdit className='editLogo' onClick={()=>{editTodo(todo.id,todo.task)}} style={todo.status === "completed" ? {color:"white"}: {color:"green"}} /></span>
                    <span className="deleteBtn" onClick={()=>{removeTodo(todo.id)}}><RiDeleteBin5Line className='deleteLogo' onClick={()=>{removeTodo(todo.id)}} style={todo.status === "urgent" ? {color:"white"}: {color:"red"}}/></span>
                </>
                : 
                <>
                </>
            }
        </div>
    </li>
    </>
  )
}

export default SingleTodo
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineSearch } from "react-icons/ai";  // For Search
import { GrAdd } from "react-icons/gr"; // For Add
import { IoMdDoneAll } from "react-icons/io"; // For Completed
import { TbHandStop } from "react-icons/tb"; // For Hold
import { GoAlert } from "react-icons/go"; //For Important
import { FiEdit } from "react-icons/fi"; // For Edit
import { RiDeleteBin5Line } from "react-icons/ri";  // For Delete
import { createTodo, deleteTodo, updateTodo, completeStatus, onHoldStatus, urgentStatus } from './redux/todo/todoActions';


const Todo = () => {

    const [ task, setTask ]= useState("");
    const [ search, setSearch ] = useState("");
    const [ showEditButton, setShowEditButton ] = useState(false);
    const [ selectedId, setSelectedId ] = useState(null);
    const [ newToOld , setNewToOld ] = useState(true);
    const [ OldToNew , setOldToNew ] = useState(false);
    const [ completed , setCompleted ] = useState(false);
    const dispatch = useDispatch();
    const [id, setId] = useState(1);
    const status = "normal";

    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;

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

    const removeTodo = (id) => {
        dispatch(deleteTodo(id));
    }

    const editTodo = (id,task) =>{
        setTask(task);
        setShowEditButton(true);
        setSelectedId(id);
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

    const newTodos = () => {
        setNewToOld(true);
        setOldToNew(false);
    }

    const oldTodos = () => {
        setNewToOld(false);
        setOldToNew(true);
    }

    const CompletedTodos = () => {
        setCompleted(!completed);
        setOldToNew(false);
        setNewToOld(false)
    }

    return (
        <div className='todoContainer'>
            <div className="header">
                <div className="headingDiv">
                    <h1 className="heading">TO DO LIST</h1>
                </div>
                <div className="search">
                    <span className="searchSpan">
                        <AiOutlineSearch className='searchLogo'/>
                    </span>
                    <input type="text" autoComplete="off" placeholder="Search Todo" className="searchTodo"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </div>
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
            <div className="filterContainer">
                <p className="addFilter">Add Filter</p>
                <div className="filterDiv">
                    <div className="wrapper">
                        <button className={`item ${newToOld ? "active" : ""}`} onClick={newTodos}>New</button>
                        <button className={`item ${OldToNew ? "active" : ""}`} onClick={oldTodos}>Old</button>
                        <button className="item " onClick={CompletedTodos}>Completed</button>
                        <button className="item ">Onhold</button>
                        <button className="item ">Urgent</button>
                    </div>
                </div>
            </div>
            <ul className="taskList">
                {
                    todos && newToOld &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                    ).map((t) => (
                        <li className={`${t.status} taskListItem`} key={t.id}>
                            <label className="taskListItemLabel">
                                <input type="checkbox"/>
                                <span className="listSpan">{t.task}</span>
                            </label>
                            <div className="logoDiv">
                                {
                                    !showEditButton ? 
                                    <>
                                        <span className="completedBtn" onClick={()=>{taskCompleted(t.id)}} ><IoMdDoneAll className='completedLogo' onClick={()=>{taskCompleted(t.id)}}/></span>
                                        <span className="holdBtn" onClick={()=>{taskOnHold(t.id)}}><TbHandStop className='holdLogo' onClick={()=>{taskOnHold(t.id)}} style={t.status === "onhold" ? {color:"white"}: {color:"orange"}}/></span>
                                        <span className="importantBtn" onClick={()=>{taskUrgent(t.id)}}><GoAlert className='importantLogo' onClick={()=>{taskUrgent(t.id)}}  style={{color:"yellow"}}/></span>
                                        <span className="editBtn" onClick={()=>{editTodo(t.id,t.task)}}><FiEdit className='editLogo' onClick={()=>{editTodo(t.id,t.task)}} style={t.status === "completed" ? {color:"white"}: {color:"green"}} /></span>
                                        <span className="deleteBtn" onClick={()=>{removeTodo(t.id)}}><RiDeleteBin5Line className='deleteLogo' onClick={()=>{removeTodo(t.id)}} style={t.status === "urgent" ? {color:"white"}: {color:"red"}}/></span>
                                    </>
                                    : 
                                    <>
                                    </>
                                }
                            </div>
                        </li>
                    ))
                }
                {
                    todos && OldToNew &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                    ).reverse().map((t) => (
                        <li className={`${t.status} taskListItem`} key={t.id}>
                            <label className="taskListItemLabel">
                                <input type="checkbox"/>
                                <span className="listSpan">{t.task}</span>
                            </label>
                            <div className="logoDiv">
                                {
                                    !showEditButton ? 
                                    <>
                                        <span className="completedBtn" onClick={()=>{taskCompleted(t.id)}} ><IoMdDoneAll className='completedLogo' onClick={()=>{taskCompleted(t.id)}}/></span>
                                        <span className="holdBtn" onClick={()=>{taskOnHold(t.id)}}><TbHandStop className='holdLogo' onClick={()=>{taskOnHold(t.id)}} style={t.status === "onhold" ? {color:"white"}: {color:"orange"}}/></span>
                                        <span className="importantBtn" onClick={()=>{taskUrgent(t.id)}}><GoAlert className='importantLogo' onClick={()=>{taskUrgent(t.id)}}  style={{color:"yellow"}}/></span>
                                        <span className="editBtn" onClick={()=>{editTodo(t.id,t.task)}}><FiEdit className='editLogo' onClick={()=>{editTodo(t.id,t.task)}} style={t.status === "completed" ? {color:"white"}: {color:"green"}} /></span>
                                        <span className="deleteBtn" onClick={()=>{removeTodo(t.id)}}><RiDeleteBin5Line className='deleteLogo' onClick={()=>{removeTodo(t.id)}} style={t.status === "urgent" ? {color:"white"}: {color:"red"}}/></span>
                                    </>
                                    : 
                                    <>
                                    </>
                                }
                            </div>
                        </li>
                    ))
                }
                {
                    todos && completed && 
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase() && todo.status.toLowerCase().includes(completed))
                    ).reverse().map((t) => (
                        <li className={`${t.status} taskListItem`} key={t.id}>
                            <label className="taskListItemLabel">
                                <input type="checkbox"/>
                                <span className="listSpan">{t.task}</span>
                            </label>
                            <div className="logoDiv">
                                {
                                    !showEditButton ? 
                                    <>
                                        <span className="completedBtn" onClick={()=>{taskCompleted(t.id)}} ><IoMdDoneAll className='completedLogo' onClick={()=>{taskCompleted(t.id)}}/></span>
                                        <span className="holdBtn" onClick={()=>{taskOnHold(t.id)}}><TbHandStop className='holdLogo' onClick={()=>{taskOnHold(t.id)}} style={t.status === "onhold" ? {color:"white"}: {color:"orange"}}/></span>
                                        <span className="importantBtn" onClick={()=>{taskUrgent(t.id)}}><GoAlert className='importantLogo' onClick={()=>{taskUrgent(t.id)}}  style={{color:"yellow"}}/></span>
                                        <span className="editBtn" onClick={()=>{editTodo(t.id,t.task)}}><FiEdit className='editLogo' onClick={()=>{editTodo(t.id,t.task)}} style={t.status === "completed" ? {color:"white"}: {color:"green"}} /></span>
                                        <span className="deleteBtn" onClick={()=>{removeTodo(t.id)}}><RiDeleteBin5Line className='deleteLogo' onClick={()=>{removeTodo(t.id)}} style={t.status === "urgent" ? {color:"white"}: {color:"red"}}/></span>
                                    </>
                                    : 
                                    <>
                                    </>
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
    }

export default Todo;



// "taskListItem"
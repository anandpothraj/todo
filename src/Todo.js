import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";  // For Search
import { GrAdd } from "react-icons/gr"; // For Add
import { IoMdDoneAll } from "react-icons/io"; // For Completed
import { TbHandStop } from "react-icons/tb"; // For Hold
import { GoAlert } from "react-icons/go"; //For Important
import { FiEdit } from "react-icons/fi"; // For Edit
import { RiDeleteBin5Line } from "react-icons/ri";  // For Delete


const Todo = () => {
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
                <input type="text" autoomplete="off" placeholder="Search Todo" className="searchTodo"/>
            </div>
        </div>
        <div className="addTask">
            <input type="text" autoomplete="off" placeholder="Add New Task" className="addTaskInput"/>
            <div className="btnDiv">
		        <button type="submit" className="submitBtn"><GrAdd/></button>
            </div>
        </div>
        <div className="filterContainer">
            <p className="addFilter">Add Filter</p>
            <div className="filterDiv">
                <div className="wrapper">
                    <button className="item active">New</button>
                    <button className="item active">Old</button>
                    <button className="item activeCompleted">Completed</button>
                    <button className="item activeOnhold">Onhold</button>
                    <button className="item activeUrgent">Urgent</button>
                </div>
            </div>
        </div>
        <ul className="taskList">
            <li className="taskListItem completed">
                <label className="taskListItemLabel">
                    <input type="checkbox"/>
                    <span className="listSpan">
                        Done with frondend part 
                    </span>
                </label>
                <div className="logoDiv">
                    <span className="completedBtn"><IoMdDoneAll className='completedLogo'/></span>
                    <span className="holdBtn"><TbHandStop className='holdLogo'/></span>
                    <span className="importantBtn"><GoAlert className='importantLogo'/></span>
                    <span className="editBtn"><FiEdit className='editLogo'style={{color:"white"}} /></span>
                    <span className="deleteBtn"><RiDeleteBin5Line className='deleteLogo'/></span>
                </div>
            </li>
            <li className="taskListItem  onhold">
                <label className="taskListItemLabel">
                    <input type="checkbox"/>
                    <span className="listSpan">
                        I m only done with ui not any other functionally. 
                    </span>
                </label>
                <div className="logoDiv">
                    <span className="completedBtn"><IoMdDoneAll className='completedLogo'/></span>
                    <span className="holdBtn"><TbHandStop className='holdLogo'/></span>
                    <span className="importantBtn"><GoAlert className='importantLogo'/></span>
                    <span className="editBtn"><FiEdit className='editLogo'/></span>
                    <span className="deleteBtn"><RiDeleteBin5Line className='deleteLogo'/></span>
                </div>
            </li>
            <li className="taskListItem urgent">
                <label className="taskListItemLabel">
                    <input type="checkbox"/>
                    <span className="listSpan">
                        Added the feature that you can give a prority to the task according to your need.
                    </span>
                </label>
                <div className="logoDiv">
                    <span className="completedBtn"><IoMdDoneAll className='completedLogo' /></span>
                    <span className="holdBtn"><TbHandStop className='holdLogo'/></span>
                    <span className="importantBtn"><GoAlert className='importantLogo'/></span>
                    <span className="editBtn"><FiEdit className='editLogo' /></span>
                    <span className="deleteBtn"><RiDeleteBin5Line className='deleteLogo' style={{color:"white"}}/></span>
                </div>
            </li>
            {/* <li className="taskListItem">
                <label className="taskListItemLabel">
                    <input type="checkbox"/>
                    <span className="listSpan">
                        you can search the todo by search input on the top. 
                    </span>
                </label>
                <div className="logoDiv">
                    <span className="completedBtn"><IoMdDoneAll className='completedLogo'/></span>
                    <span className="holdBtn"><TbHandStop className='holdLogo'/></span>
                    <span className="importantBtn"><GoAlert className='importantLogo'/></span>
                    <span className="editBtn"><FiEdit className='editLogo'/></span>
                    <span className="deleteBtn"><RiDeleteBin5Line className='deleteLogo'/></span>
                </div>
            </li>
            <li className="taskListItem completed">
                <label className="taskListItemLabel">
                    <input type="checkbox"/>
                    <span className="listSpan">
                        Also create, edit, delete and select the todo. 
                    </span>
                </label>
                <div className="logoDiv">
                    <span className="completedBtn"><IoMdDoneAll className='completedLogo'/></span>
                    <span className="holdBtn"><TbHandStop className='holdLogo'/></span>
                    <span className="importantBtn"><GoAlert className='importantLogo'/></span>
                    <span className="editBtn"><FiEdit className='editLogo'/></span>
                    <span className="deleteBtn"><RiDeleteBin5Line className='deleteLogo'/></span>
                </div>
            </li>
            <li className="taskListItem urgent">
                <label className="taskListItemLabel">
                    <input type="checkbox"/>
                    <span className="listSpan">
                        The web app is responsive in any device from extra large to galaxy fold and written in pure css. 
                    </span>
                </label>
                <div className="logoDiv">
                    <span className="completedBtn"><IoMdDoneAll className='completedLogo'/></span>
                    <span className="holdBtn"><TbHandStop className='holdLogo'/></span>
                    <span className="importantBtn"><GoAlert className='importantLogo'/></span>
                    <span className="editBtn"><FiEdit className='editLogo'/></span>
                    <span className="deleteBtn"><RiDeleteBin5Line className='deleteLogo'/></span>
                </div>
            </li>
            <li className="taskListItem onhold">
                <label className="taskListItemLabel">
                    <input type="checkbox"/>
                    <span className="listSpan">
                        Tommorrow I will work on the functionality part that is react and redux
                    </span>
                </label>
                <div className="logoDiv">
                    <span className="completedBtn"><IoMdDoneAll className='completedLogo'/></span>
                    <span className="holdBtn"><TbHandStop className='holdLogo'/></span>
                    <span className="importantBtn"><GoAlert className='importantLogo'/></span>
                    <span className="editBtn"><FiEdit className='editLogo'/></span>
                    <span className="deleteBtn"><RiDeleteBin5Line className='deleteLogo'/></span>
                </div>
            </li> */}
        </ul>
    </div>
  )
}

export default Todo;
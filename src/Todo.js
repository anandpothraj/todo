import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import SingleTodo from './components/SingleTodo';

const Todo = () => {

    const [ search, setSearch ] = useState("");
    const [ task, setTask ]= useState("");
    const [ showEditButton, setShowEditButton] = useState(false);
    const [ selectedId, setSelectedId ] = useState(null);
    const [ newToOld, setNewToOld ] = useState(true);
    const [ oldToNew , setOldToNew ] = useState(false);
    const [ completed, setCompleted ] = useState(false);
    const [ onhold, setOnHold ] = useState(false);
    const [ urgent, setUrgent ] = useState(false);


    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;

    const editTodo = (id,task) =>{
        setTask(task);
        setShowEditButton(true);
        setSelectedId(id);
    }

    return (
        <div className='todoContainer'>
            <Header value={search} setSearch={setSearch} />
            <AddTodo showEditButton={showEditButton} setShowEditButton={setShowEditButton} task={task} setTask={setTask} selectedId={selectedId} setSelectedId={setSelectedId}/>
            <Filter setNewToOld={setNewToOld} setOldToNew={setOldToNew} setCompleted={setCompleted} newToOld={newToOld} 
                oldToNew={oldToNew} completed={completed} onhold={onhold} setOnHold={setOnHold} urgent={urgent} setUrgent={setUrgent}/>
            <ul className="taskList">
                { 
                    todos && newToOld &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                    ).map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && oldToNew &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                    ).reverse()
                    .map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && completed &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase()) && todo.status.toLowerCase().includes("completed")
                    ).reverse()
                    .map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && onhold &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase()) && todo.status.toLowerCase().includes("onhold")
                    ).reverse()
                    .map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && urgent &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase()) && todo.status.toLowerCase().includes("urgent")
                    ).reverse()
                    .map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }

            </ul>
        </div>
    )
    }

export default Todo;

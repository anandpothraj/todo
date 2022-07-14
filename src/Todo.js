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
            <Filter/>
            <ul className="taskList">
                {
                    todos && 
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                    ).map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
            </ul>
        </div>
    )
    }

export default Todo;

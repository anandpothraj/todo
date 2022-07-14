import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import SingleTodo from './components/SingleTodo';
import Pagination from './components/Pagination';

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
    const todosPerPage = 5;
    const [ currentPage, setCurrentPage ] = useState(1);

    const lastTodoIndex = currentPage * todosPerPage;
    const firstTodoIndex = lastTodoIndex - todosPerPage;


    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;

    const editTodo = (id,task) =>{
        setTask(task);
        setShowEditButton(true);
        setSelectedId(id);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='todoContainer'>
            <Header value={search} setSearch={setSearch} />
            <AddTodo showEditButton={showEditButton} setShowEditButton={setShowEditButton} task={task} setTask={setTask} selectedId={selectedId} setSelectedId={setSelectedId}/>
            <Filter setNewToOld={setNewToOld} setOldToNew={setOldToNew} setCompleted={setCompleted} newToOld={newToOld} 
                oldToNew={oldToNew} completed={completed} onhold={onhold} setOnHold={setOnHold} urgent={urgent} setUrgent={setUrgent} setCurrentPage={setCurrentPage}/>
            <ul className="taskList">
                { 
                    todos && newToOld &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                    ).slice(firstTodoIndex,lastTodoIndex).map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && oldToNew &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase())
                    ).reverse()
                    .slice(firstTodoIndex,lastTodoIndex).map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && completed &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase()) && todo.status.toLowerCase().includes("completed")
                    )
                    .slice(firstTodoIndex,lastTodoIndex).map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && onhold &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase()) && todo.status.toLowerCase().includes("onhold")
                    )
                    .slice(firstTodoIndex,lastTodoIndex).map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }
                { 
                    todos && urgent &&
                    todos.filter((todo) =>
                    todo.task.toLowerCase().includes(search.toLowerCase()) && todo.status.toLowerCase().includes("urgent")
                    )
                    .slice(firstTodoIndex,lastTodoIndex).map((todo) => (
                        <SingleTodo todo={todo} showEditButton={showEditButton}  editTodo={editTodo} key={todo.id} />
                    ))
                }

            </ul>
            <Pagination todosPerPage={todosPerPage} totalTodos={todos.length} paginate={paginate} currentPage={currentPage}/>
        </div>
    )
    }

export default Todo;

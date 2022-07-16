import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../redux/todo/todoActions';

const Pagination = ({ todosPerPage , totalTodos, paginate, currentPage }) => {

    const dispatch = useDispatch();
    const pageNumbers = [];

    const deleteAllTodos = () => {
        dispatch(deleteAll())
    }

    for(let i=1 ; i<= Math.ceil(totalTodos/todosPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
        <span className='pageSpan'>Page {currentPage} of {pageNumbers.length}</span>
        <span className='deleteSpan' onClick={deleteAllTodos}><button className='deleteAllBtn' onClick={deleteAllTodos}>Delete All</button></span>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number}  className='pageItem'>
                    <button className={`pageLink ${currentPage === number ? "activePage" : ""}`} onClick={() => paginate(number)} >
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination
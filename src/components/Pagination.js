import React from 'react';

const Pagination = ({ todosPerPage , totalTodos, paginate, currentPage }) => {

    const pageNumbers = [];

    for(let i=1 ; i<= Math.ceil(totalTodos/todosPerPage); i++){
        pageNumbers.push(i);
    }


  return (
    <nav>
        <span className='pageSpan'>Page {currentPage} of {pageNumbers.length}</span>
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
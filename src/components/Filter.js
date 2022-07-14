import React from 'react';

const Filter = ({newToOld,newTodos,OldToNew,oldTodos,CompletedTodos}) => {
  return (
    <>
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
    </>
  )
}

export default Filter
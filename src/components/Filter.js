import React from 'react';

const Filter = ({newToOld,setNewToOld,oldToNew,setOldToNew,completed,setCompleted,onhold,setOnHold,urgent,setUrgent,setCurrentPage}) => {

  const showNewToOld = () => {
    setNewToOld(true);
    setOldToNew(false);
    setCompleted(false);
    setOnHold(false);
    setUrgent(false);
    setCurrentPage(1);
  }

  const showOldToNew = () => {
    setNewToOld(false);
    setOldToNew(true);
    setCompleted(false);
    setOnHold(false);
    setUrgent(false);
    setCurrentPage(1);
  }

  const showCompleted = () => {
    setNewToOld(false);
    setOldToNew(false);
    setCompleted(true);
    setOnHold(false);
    setUrgent(false);
    setCurrentPage(1);
  }
  const showOnHold = () => {
    setCompleted(false);
    setNewToOld(false);
    setOldToNew(false);
    setOnHold(true);
    setUrgent(false);
    setCurrentPage(1);
  }

  const showUrgent = () => {
    setCompleted(false);
    setNewToOld(false);
    setOldToNew(false);
    setOnHold(false);
    setUrgent(true);
    setCurrentPage(1);
  }

  return (
    <>
        <div className="filterContainer">
            <p className="addFilter">Add Filter</p>
            <div className="filterDiv">
                <div className="wrapper">
                    <button className={`item ${newToOld ? "active" : ""}`} onClick={showNewToOld}>New</button>
                    <button className={`item ${oldToNew ? "active" : ""}`} onClick={showOldToNew}>Old</button>
                    <button className={`item ${completed ? "activeCompleted" : ""}`} onClick={showCompleted}>Completed</button>
                    <button className={`item ${onhold ? "activeOnhold" : ""}`} onClick={showOnHold}>Onhold</button>
                    <button className={`item ${urgent ? "activeUrgent" : ""}`} onClick={showUrgent}>Urgent</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Filter
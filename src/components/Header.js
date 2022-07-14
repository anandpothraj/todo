import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";  // For Search

const Header = ({ search, setSearch}) => {
  return (
    <>
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
    </>
  )
}

export default Header
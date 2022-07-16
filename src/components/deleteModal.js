import React from 'react'

const deleteModal = () => {
  return (
    <>
        <div>
            <h3>Do you want to delete all todos?</h3>
            <div className="btnDiv">
                <div className="cancel">cancel</div>
                <div className="delete">delete</div>
            </div>
        </div>
    </>
  )
}

export default deleteModal;







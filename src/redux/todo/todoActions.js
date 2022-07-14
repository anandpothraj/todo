import { 
    CREATE_NEW_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    TASK_COMPLETED,
    TASK_ONHOLD,
    TASK_URGENT
 } from './todoConstants';


export const createTodo = (id,task,status) => async (dispatch) => {
        dispatch({
            type: CREATE_NEW_TODO, 
            payload: {
                id:id,
                task:task,
                status:status
            } 
        });
};


export const deleteTodo = (id) => (dispatch) => {

    dispatch({
        type: DELETE_TODO,
        payload:{
            deleteId:id
        }
    });
}

export const updateTodo = (id,task) => (dispatch) => {

    dispatch({
        type: UPDATE_TODO,
        payload:{
            editId:id,
            editTask:task
        }
    });
}

export const completeStatus = (id) => (dispatch) => {

    dispatch({
        type: TASK_COMPLETED,
        payload:{
            completedId:id,
        }
    });
}

export const onHoldStatus = (id) => (dispatch) => {

    dispatch({
        type: TASK_ONHOLD,
        payload:{
            onholdId:id,
        }
    });
}

export const urgentStatus = (id) => (dispatch) => {

    dispatch({
        type: TASK_URGENT,
        payload:{
            urgentId:id,
        }
    });
}


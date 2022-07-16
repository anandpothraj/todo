import { 
    CREATE_NEW_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    TASK_COMPLETED,
    TASK_ONHOLD,
    TASK_URGENT,
    DELETE_ALL
 } from './todoConstants';

export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {

        case CREATE_NEW_TODO:
            const { id,task,status } = action.payload;
            return {
                todos:[
                    {
                        id:id,
                        task:task,
                        status:status
                    },
                    ...state.todos
                ] 
            }; 

    case DELETE_TODO:
        const { deleteId } = action.payload;
        
    const newTodos = state.todos.filter((todo) => todo.id !== deleteId)

    return { 
        ...state,
        todos: newTodos
    };

    case UPDATE_TODO:

            const { editId , editTask } = action.payload;

            const updatedTodo = state.todos.map((todo) => {
                if(todo.id === editId){
                    return { ...todo, task:editTask}
                }
                return todo;
            })

            return {
                ...state,
                todos:updatedTodo
            }; 

    case TASK_COMPLETED:

            const { completedId } = action.payload;

            const completedTodo = state.todos.map((todo) => {
                if(todo.id === completedId){
                    return { ...todo, status:"completed"}
                }
                return todo;
            })

            return {
                ...state,
                todos:completedTodo
            }; 

    case TASK_ONHOLD:

            const { onholdId } = action.payload;

            const onholdTodo = state.todos.map((todo) => {
                if(todo.id === onholdId){
                    return { ...todo, status:"onhold"}
                }
                return todo;
            })

            return {
                ...state,
                todos:onholdTodo
            }; 
    case TASK_URGENT:

            const { urgentId } = action.payload;

            const urgentTodo = state.todos.map((todo) => {
                if(todo.id === urgentId){
                    return { ...todo, status:"urgent"}
                }
                return todo;
            })

            return {
                ...state,
                todos:urgentTodo
            }; 

    case DELETE_ALL:
         return {
            ...state,
            todos:[]
         }

    default:
    return state;
    }
    };
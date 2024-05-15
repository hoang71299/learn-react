import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { completedTodo, deleteTodo, undoTodo } from '../../actions/todo';
function TodoList() {
  const todoList = useSelector(state => state.todoReducer)
  const dispatch = useDispatch();
  // console.log(todoList);
  const handleCompleted = (id)=>{
    dispatch(completedTodo(id))
    // console.log(id);
  }
  const handleUndo=(id)=>{
    dispatch(undoTodo(id))
    // console.log(id);
  }
  const handleDelete=(id)=>{
    // console.log(id);
    dispatch(deleteTodo(id))
  }
  return (
    <>
      {todoList && (
        <div className='todo_list'>
          {todoList.map((item)=>(
            <div className='todo_item' key={item.id}>
              <span className={"todo_content " + (item.completed && "todo_content--complete") } >{item.content}</span>
              {item.completed ? (
                <button  onClick={()=>handleUndo(item.id)}>U</button>
              ):(
                <button onClick={()=>handleCompleted(item.id)}>V</button>
              )}
              <button onClick={()=> handleDelete(item.id)}>X</button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default TodoList
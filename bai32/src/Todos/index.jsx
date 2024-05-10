import { useEffect } from "react";
import { useRef } from "react";
import { useReducer } from "react";
const init = [
  {
    id:1,
    content:"Thứ 2 học html"
  }
];
const reducer = (state, action) => {
  //action delete , create
  switch (action.type) {
    case "CREATE":
      return [...state ,{
        id:Date.now(),
        content:action.value
      }]
    case "DELETE":
      const newState= state.filter(todo => todo.id != action.id)
      return  newState
    default:
      return state
  }
  console.log(state, action);
};
function Todos() {
  const [todos, dispatch] = useReducer(reducer, init);
  const inputRef= useRef()
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  const handleSubmit=(e)=>{
    e.preventDefault();
    const value = e.target.elements.inputTodo.value
    if(value){
      dispatch({
        type:"CREATE",
        value:value
      })
      inputRef.current.value = ""
    }
  }
  const handleDelete=(id)=>{
    dispatch({
      type:"DELETE",
      id:id
    })
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" name="inputTodo" />
        <button>Thêm todo</button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map(item =>(
            <li key={item.id}>
              {item.content}
              <button onClick={()=>handleDelete(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Todos;

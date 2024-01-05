import { useReducer, useState } from 'react'

const Todo = () => {
        // Action Creators
        const TODOACTIONS = {
            ADDTODO: 'addTodo',
            REMOVETODO: 'removeTodo'
          }
          const todoReducer = (todos, action) => {
            switch(action.type){
              case TODOACTIONS.ADDTODO : return [...todos, newTodo(action.payload.name)]
            }
          }
        const newTodo = (name) => {
          return {id: Date.now(), name:name, done: false}
        }
        const [todos, dispatchTodos] = useReducer(todoReducer, []);
        const [name, setName] = useState('');
  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => dispatchTodos({type: TODOACTIONS.ADDTODO, payload: {name: name}})}>Add</button>
      <ul>
        {
          todos.map((item)=>{
            return (
              <li key={item.id}>{item.name}</li>
              )
             })
        }
      </ul>
    </div>
  )
}

export default Todo
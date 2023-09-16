import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  return (
    <div className="bg-gray-300">
      <div>
        <h1>Todo List</h1>
        <from>
          <input type="text" />
          <button>Add Todo </button>
        </from>
        <div className="todo-show-area">
          <ul>
            <li>  </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

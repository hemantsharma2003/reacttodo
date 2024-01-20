import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {useState} from 'react';

const data = [
  {
    title: 'Item 1',
    id: 1
  },
  {
    title: 'Item 2',
    id: 2
  },
  {
    title: 'Item 3',
    id: 3
  },
];

function App() {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    // const newArray = oldArray + new Element
    const newArray = [...todos];
    newArray.push({
      id: todos.length,
      title: newTodo
    })
    setTodos(newArray);

    setTodos([...todos, {
      id: todos.length,
      title: newTodo
    }]);
    setNewTodo('');
  }
  return (
    <div className="container p-5">
        {
          todos.map((todo)=>
          <div key={todo.id} className="p-1 border d-flex justify-content-between">
            <span>{todo.title}</span><Button>X</Button>
          </div>)
        }
        <div className="p-1 border d-flex justify-content-end">
          <input type="text" placeholder="Enter todo..." onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
          <Button className="btn-success" onClick={addTodo}>+</Button>
        </div>
    </div>
  );
}

export default App;

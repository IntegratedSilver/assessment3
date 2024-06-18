import { useEffect, useState } from "react";

interface Todos {
  id: number;
  name: string;
}

const Fetching = () => {


        const [todos, setTodos] = useState<Todos[]>([])
//useState to help us handle errors


  ///Create a function to help us fetch our data
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
  };

  ///We need a useEffect for rendering our data once our fetchingFetch component loads, no depenency in the array, no clean up function
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <h1 className="text-center">Fetching Data using Fetch</h1>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </div>

      
    </>


  );
  
}

export default Fetching
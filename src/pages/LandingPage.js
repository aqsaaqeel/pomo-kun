import "../index.css";
import { useState } from "react";
import Modal from "./Modal";
import TodosList from "./TodosList";
export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const [newTodos, setNewTodos] = useState([]);
  const addTodo = (newTodo) => {
    const {title, desc} = newTodo;
    const addNewTodos = [newTodo, ...newTodos];
    setNewTodos(addNewTodos);
    // console.log(title, desc);
    console.log(...newTodos);
    setShowModal(false);
  };
  return (
    <div>
      <div className="bg-purple-500 main-container flex flex-col justify-center h-screen max-w-[100%] container mx-auto">
        <h1 className="text-4xl text-white">Welcome Back, Aqsa</h1>
        <h3 className="text-lg margin-down text-white">
          Here's the first tasks for today
        </h3>
        <div className="bg-white-500 rounded-xl content-container flex-1 container mx-auto">
          <div className="text-2xl flex justify-between">
            To-do list
            
              <button className="h-10 w-10 flex justify-center items-center rounded-full bg-purple-500"
              onClick={() => setShowModal(true)}>
                +{" "}
              </button>

          </div>
    
          <TodosList listoftodos = {newTodos}/>
        </div>
      </div>
      {showModal && <Modal onSubmit={addTodo} />}
    </div>
  );
}

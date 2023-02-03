import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
export default function Modal(props) {
  const navigate = useNavigate();
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState('');
  const handleChange = e => {
    const {name, value} = e.target;
    if(name === "taskTitle"){
      setTaskTitle(value);
    }if(name === "description"){
      setDescription(value);
    }if(name === "timer") {
      setTimer(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Hey at submission")
    props.onSubmit({
      title : taskTitle,
      desc : description,
      time : timer
    });
    navigate("/")
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex 
        justify-center items-center"
    >
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <div className="bg-white w-96 h-2/4 rounded-lg flex flex-col items-center">
          <div className="w-96 h-fit object-contain p-7 flex flex-col content-between">
            <div className="modal-body">
              <input
                className="h-10 rounded-sm w-80 bg-slate-200 p-2"
                placeholder="Add Title"
                name="taskTitle"
                onChange={handleChange}
                type = "text"
                id = "title"
                value={taskTitle}
              ></input>
              <div className="p-1"></div>
              <input
                className="h-40 rounded-sm w-80 bg-slate-200 p-2"
                placeholder="Add Description"
                onChange={handleChange}
                name = "description"
                type = "text"
                id = "desc"
                value={description}
              ></input>
              <div className="p-1"></div>
              <input
                className="h-10 rounded-sm w-80 bg-slate-200 p-2"
                placeholder="Add Time"
                onChange={handleChange}
                name = "timer"
                type = "text"
                id = "desc"
                value={timer}
              ></input>
              <div className="p-10"></div>
            </div>
            <div className="modal-menu flex justify-around justify-self-end">
                  <Link to = "/"><button className="bg-slate-200 text-purple-600 rounded-sm w-20 h-10">
                  Cancel
                  </button></Link>
                  <button className="bg-purple-600 text-slate-200 rounded-sm w-20 h-10" 
                  onClick={handleSubmit} onSubmit={() => navigate("/")}>Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

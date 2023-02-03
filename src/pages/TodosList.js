import { Link, useNavigate } from "react-router-dom"
export default function TodosList({listoftodos}) {
  const navigate = useNavigate();
    return (
      <ul className="divide-y divide-gray-200">
        {listoftodos.map((task) => (
          <li className="py-4 flex justify-between" key = {task.title}>
            {/* <div className="flex justify-between"> */}
            <div className="flex flex-col ml-3"><p className="text-sm font-medium text-gray-900"
              onClick={navigate("/pomo-page",{state : {todoTitle : task.title, 
              todoDescription : task.desc, 
              todoTime: task.time}})}>{task.title}</p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex justify-between items-center">
              <button className="px-1">Delete</button>
              <button>Edit</button>
            </div> 
          </li>
        ))}
      </ul>
    )
  }
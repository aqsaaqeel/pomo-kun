import { Link } from "react-router-dom"
export default function TodosList({listoftodos}) {
    return (
      <ul className="divide-y divide-gray-200">
        {listoftodos.map((task) => (
          <li className="py-4 flex justify-between">
            {/* <div className="flex justify-between"> */}
            <div className="flex flex-col ml-3">
              <Link to="/pomo-page"><p className="text-sm font-medium text-gray-900">{task.title}</p></Link>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex justify-between items-center">
              <button className="px-1">Delete</button> <button>Edit</button></div> 
          </li>
        ))}
      </ul>
    )
  }
import { Link } from "react-router-dom";
export default function Modal() {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex 
        justify-center items-center"
    >
      <div className="bg-white w-96 h-2/4 rounded-lg flex flex-col items-center">
        <div className="w-96 h-fit object-contain p-7 flex flex-col content-between">
          <div className="modal-body">
            <input
              className="h-10 rounded-sm w-80 bg-slate-200 p-2"
              placeholder="Add Title"
            ></input>
            <div className="p-1"></div>
            <input
              className="h-40 rounded-sm w-80 bg-slate-200 p-2"
              placeholder="Add Description"
            ></input>
            <div className="p-1"></div>
            <input
              className="h-10 rounded-sm w-80 bg-slate-200 p-2"
              placeholder="Add Time"
            ></input>
            <div className="p-10"></div>
          </div>
          <div className="modal-menu flex justify-around justify-self-end">
                <button className="bg-slate-200 text-purple-600 rounded-sm w-20 h-10">
                Cancel
                </button>
                <Link to="/"><button className="bg-purple-600 text-slate-200 rounded-sm w-20 h-10">Add</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

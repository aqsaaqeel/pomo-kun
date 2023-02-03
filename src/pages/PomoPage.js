import { useLocation } from "react-router-dom";

export default function PomoPage() {
  const currentState = useLocation();
  const {state} = currentState;
  const {todoTitle, todoDescription, todoTime} = state;
  return (
    <div>
      <div className="bg-purple-500 main-container flex flex-col justify-center h-screen max-w-[100%] container mx-auto">
        <div className="bg-white-500 rounded-xl content-container flex flex-1 justify-center container mx-auto flex-wrap">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* left side div */}
            <div className="flex flex-col justify-evenly">
              <div className="flex flex-col justify-center items-center">
                <div className="text-8xl text-purple-500">45m : 28s</div>
                <div className="text-2xl text-purple-500">
                  out of {todoTime} minutes
                </div>
              </div>
              <div className="p-1"></div>
              <div className="pomo-controller">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-nowrap">
                    <button className="bg-slate-200 text-purple-600 rounded-sm h-10 w-32 mr-1">
                      Start
                    </button>
                    <button className="bg-purple-600 text-slate-200 rounded-sm h-10 w-32 mx-1">
                      Pause
                    </button>
                  </div>
                  <div className="p-1"></div>
                  <div>
                    <button className="bg-yellow-100 text-yellow-400 rounded-sm h-10 w-64">
                      Pause
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* right side div */}
            <div className="flex flex-col">
              <div className="flex flex-col justify-center my-8">
                    <h1 className="text-4xl">{todoTitle}</h1>
                    <div className="p-3"></div>
                    <text className="text-2xl">
                    {todoDescription}
                    </text>
              </div>
              <div className="p-1"></div>
              <div className="tags">
                <div className="flex flex-col">
                  <text className="text-2xl mb-2">Tags:</text>
                  <div className="flex flex-nowrap">
                    <button className="bg-slate-200 text-purple-600 rounded-sm h-10 w-32 mr-1">
                      Restart
                    </button>
                    <button className="bg-slate-200 text-purple-600 rounded-sm h-10 w-32 mr-1">
                      Restart
                    </button>
                    <button className="bg-slate-200 text-purple-600 rounded-sm h-10 w-32 mr-1">
                      Restart
                    </button>
                  </div>
                  <div className="p-1"></div>
                </div>
              </div>
              <div className="date">Date : </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

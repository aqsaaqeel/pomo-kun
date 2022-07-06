import "../index.css";
import { Link } from "react-router-dom";
import LandingModal from "./LandingModal";
import Example from "./Example";
export default function LandingPage() {
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
            <Link to="/landing-modal"><div className="h-10 w-10 flex justify-center items-center rounded-full bg-purple-500">
              +{" "}
            </div></Link>
        
          </div>
          <Example />
        </div>
      </div>
    </div>
  );
}

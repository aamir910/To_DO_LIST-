import React from "react";
import { useState } from "react";

import Task from "./task";
// let   showlist = ()=>{
//     // const [showlist , setshowlist ] = useState([])
//     let arr = [1 ,2 ,3 ,4 , 5]
//     return (
//         settasks(arr) x

//         )
//     }
const MainList = () => {
  const [tasks, settasks] = useState([]);

  const data = [
    {
      task: "go to gym",
      level: "high",
    }
  ];

  function Todo() {
    return settasks([ ]);
  }

  return (
    <div className=" bg-gray-200 h-screen flex flex-col  items-center">
      <div className=" p-4">
        {/* Your content goes here */}
        <div className=" main_task flex flex-row space-between">
          <h1 className=" font-bold">Task List</h1>
          <button
            onClick={Todo}
            className="bg-purple-600   text-white rounded-lg px-1 py-1 w-28 text-sm"
          >
            Add Task
          </button>
        </div>
      </div>

      {/************************   * task_show               */}

 

     
          <div className="show_tasks m-1 bg-white flex flex-row  w-1/2 rounded-lg ">
             <Task tasks = {"go to gym"}   level=    {"low"} />
            
               </div>
               <div className="show_tasks m-1 bg-white flex flex-row  w-1/2 rounded-lg ">
             <Task tasks = {"go to gym"}   level=    {"low"} />
            
               </div>
               <div className="show_tasks m-1 bg-white flex flex-row  w-1/2 rounded-lg ">
             <Task tasks = {"go to gym"}   level=    {"high"} />
            
               </div>
               <div className="show_tasks m-1 bg-white flex flex-row  w-1/2 rounded-lg ">
             <Task tasks = {"go to gym"}   level=    {"medium"} />
            
               </div>
      

      {/* taskshow end ************************ */}
    </div>
  );
};

export default MainList;

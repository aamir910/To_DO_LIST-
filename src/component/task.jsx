import {React , useState} from 'react'
import "./main_list.css";

import { Circle } from "rc-progress";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Task = ({tasks , level }) => {
    const [progress, setProgress] = useState({
        percent: 0,
        progressbtn: "TO DO",
      });
    
      function Progressbarchange() {
        if (progress.percent === 0) {
          setProgress({
            percent: 50, // New value for percent
            progressbtn: "in progress", // New value for progressbtn
          });
        } else if (progress.percent === 50) {
          setProgress({
            percent: 100, // New value for percent
            progressbtn: "completed", // New value for progressbtn
          });
        } else {
          setProgress({
            percent: 0,
            progressbtn: "TO DO",
          });
        }
      }
    

  return (
    <div>
    <div className=" mappingarea  flex flex-row  items-center justify-center space-between h-10  m-1    ">
              <div className=" p-2">
                <p className="taskpriority text-gray-400">task</p>
                <p className="taskpriority2 text-sm text-black-600">
                  {tasks}
                </p>
              </div>
              <div>
                <p className=" taskpriority text-gray-400">priority</p>
                <p
                  style={{
                    color:
                       level === "high"
                        ? "red"
                        : level === "low"
                        ? "green"
                        : "yellow",
                  }}
                  className=" text-sm  font-bold  "
                >
                  {level}
                </p>
              </div>

              <div>
                <button onClick={Progressbarchange} className="progressbtn ">
                  {" "}
                  {progress.progressbtn}
                </button>
              </div>
              <div>
                <p className="progressbar">
                  {/* {data.progesss} */}
                  <Circle
                    percent={progress.percent}
                    strokeWidth={6}
                    strokeColor="red"
                  />
                </p>
              </div>

              <div className="p-4">
                <button>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="mr-2 text-red-500"
                  />
                </button>

                <button>
                  <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                </button>
              </div>
            </div>
                


    </div>
  )
}

export default Task


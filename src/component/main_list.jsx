import React from 'react'
import { useState } from 'react'
import './main_list.css'
import {  Circle } from 'rc-progress';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// let   showlist = ()=>{
//     // const [showlist , setshowlist ] = useState([])
//     let arr = [1 ,2 ,3 ,4 , 5]
//     return (
//         settasks(arr) x
        
        
//         )
//     }
    const MainList = () => {
        const [tasks , settasks] = useState([ ]) ;

       const [progress ,setProgress] = useState({percent : 0 , progressbtn : "TO DO" } )  
        

       function Progressbarchange()
       {
       if(progress.percent == 0)
       {
        setProgress({
          percent: 50, // New value for percent
          progressbtn: "in progress", // New value for progressbtn
        });
       }
       else if (progress.percent == 50)
       {
        setProgress({
          percent: 100, // New value for percent
          progressbtn: "completed", // New value for progressbtn
        });
       }
       else 
       {   
        setProgress({
        percent: 0, 
        progressbtn: "TO DO", 
      });
       }

         
       }


       function Todo()
        {
          const data =[
            {
                task : "task"  , 
                title : "go to gym"  , 
                priority : "priority " , 
                level : "high",
                button : progress.progressbtn , 
                progesss : "" 
                  , 
                btn : "comimg " 
            } ,
            

          ]

      

     return(
          settasks(data)
     )

        }

        return (
    <div className=" bg-gray-200 h-screen flex flex-col  items-center">
      <div className=" p-4">
        {/* Your content goes here */}
        <div className=' main_task flex flex-row space-between'>
        <h1 className=' font-bold'>Task List</h1>
        <button onClick={Todo} className="bg-purple-600   text-white rounded-lg px-1 py-1 w-28 text-sm">
      Add Task 
    </button>

        </div>
      </div>
<div className="show_tasks m-5 bg-white flex flex-row  w-1/2 rounded-lg " >

         {tasks.map(
            (data)=> { 

                return(
                    <div className=' mappingarea  flex flex-row  items-center justify-center space-between h-10  m-1    '>
                         <div className=' p-2'>
                        <p className='taskpriority text-gray-400'>{data.task}</p>
                        <p className='taskpriority2 text-sm text-black-600' >{data.title}</p>
                         </div>
                         <div>
                          <p className=' taskpriority text-gray-400' >{data.priority}</p>
                          <p className='text-red-600 text-sm  font-bold  '>{data.level}</p> 
                        </div>

                        <div>
                        <button onClick={Progressbarchange} className='progressbtn '> {progress.progressbtn}</button>

                        </div>
                        <div>
                          <p className="progressbar">
                            {/* {data.progesss} */}
                          <Circle percent={progress.percent} strokeWidth={6} strokeColor="red" /> 
                          </p>
                          </div>
                          <div>
                            {data.btn}
                          <FontAwesomeIcon icon="fa-solid fa-trash" style={{color: "#e60a0a", height:"20px" , width:"20px"}} />

                          </div>
                      
                        </div>
                )
            }
         )}

</div>


    </div>
  )
}

export default MainList

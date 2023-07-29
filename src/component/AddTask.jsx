import {React , useState} from 'react'
import './AddTask.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Addtask = () => {

  return (
<>
  <div className=' windowopen '>
     <div className="heading">
      <h1>Add Task</h1>
      <p>
     <FontAwesomeIcon icon={faTimes} />
      </p>
     </div>


     <div className="inputfield">
      <h1 className=" font-bold">Task</h1>
      <div className=" border border-gray-300 rounded-md shadow-md">
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Search..."
        />
      </div>
    </div>
    <div>
      <h2>Please select one option:</h2>
         
      <button className='selectbtn '> High</button>
      <button className='selectbtn '>Medium</button>
      <button className='selectbtn '>low</button>


    </div>

   <div className='addbtndiv px-2'>
     <button className='addbtn' >Add</button>

   </div>
  
  </div>
</>
  )
}

export default Addtask

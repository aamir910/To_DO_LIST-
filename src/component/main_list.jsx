import React from 'react'

const MainList = () => {
  return (
    <div className="bg-grey-200 h-screen flex flex-col  items-center">
      <div className=" p-4">
        {/* Your content goes here */}
        <div className=' main_task flex flex-row space-between'>
        <h1 className=' font-bold'>Task List</h1>
        <button className="bg-purple-600   text-white rounded-lg px-1 py-1 w-28 text-sm">
      Add Task 
    </button>

        </div>
      </div>
    </div>
  )
}

export default MainList

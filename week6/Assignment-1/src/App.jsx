import React from 'react'
import EditCounter1 from './EditCounter1'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <EditCounter1 id="1" />
        <EditCounter1 id="2" />
        <EditCounter1 id="3" />
        <EditCounter1 id="4" />
      </div>
    </div>
  )
}

export default App
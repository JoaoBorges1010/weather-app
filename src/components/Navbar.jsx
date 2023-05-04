import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center fixed w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="m-3 p-1">
        <h3 className="text-xl capitalize text-white">weather app</h3>
      </div>
      <div className="m-3 p-1 text-white">Menu here</div>
    </div>
  )
}

export default Navbar

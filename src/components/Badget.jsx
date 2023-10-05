import React from 'react'

const Badget = ({text}) => {
  return (
    <div className='m-2 text-white  px-3 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
        <span>{text}</span>
    </div>
  )
}

export default Badget;
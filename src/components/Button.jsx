import React from 'react'

const Button = (props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full bg-coral-red text-white border-coral-red">
        {props.label}<img src={props.iconURL} alt="arrow-right icon" className="ml-2 rounded-full bg-white w-5 h-5"/>
    </button>
  )
}

export default Button
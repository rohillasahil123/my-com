import React from 'react'

const Button = ({ text, color, onClick }) => {
    return (
        <button className={`${color} h-10 w-[60%] font-semibold items-center text-lg shadow rounded-md flex justify-center mx-auto  hover:bg-blue-800 hover:text-white `} onClick={onClick} >
            {text}
        </button>
    )
}

export default Button
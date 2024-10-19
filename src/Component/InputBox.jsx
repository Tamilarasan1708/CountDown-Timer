import React from 'react'

const InputBox = ({style,value,disabled,type,className}) => {
  return (
    <div className={`${className}`}>
         <input
            type={type}
            className={`text-sm rounded-md cursor-pointer border ml-5  w-40 border-gray-400 p-2.5 text-black ${style}`}
            value={value}
            disabled={disabled}
          />
    </div>
  )
}

export default InputBox
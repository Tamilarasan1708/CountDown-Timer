import React from "react";

const Dropdown = ({ options, style, onChange, value, required, readonly, labelName, icons,customStyle }) => {
    return (
      <div className={`flex items-center  ${customStyle}`} >
        {icons && <span className="icon">{icons}</span>}
        <label className="text-sm font-medium">{labelName}</label>
        <select
          value={value}
          className={`text-sm rounded-md cursor-pointer border ml-5 w-40 border-gray-400 p-2.5 text-black focus:outline-none focus:border-blue-600 ${style}`}
          onChange={onChange}
          required={required }
          readOnly={readonly}
        >
          {options
            ? options.map((option,index) => (
                <option
                  className="dropdwn-opt appearance-none text-black outline-none border-gray-400 "
                  key={index}
                  value={option.value}
                 
                >
                  {option.label}
                </option>
              ))
            : null}
        </select>
      </div>
    );
  };

  export default Dropdown;
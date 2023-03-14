import React from 'react'

const Input = ({type, className,name,handleChange,placeholder,value}) => {
  return (
    <input 
        type={type} 
        className={className} 
        name={name} 
        onChange={handleChange}
        placeholder={placeholder}
        value={value}/>
  )
}

export default Input
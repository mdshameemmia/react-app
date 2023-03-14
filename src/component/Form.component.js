import React from 'react'

const Form = ({ className, children, onSubmit }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
)

export default Form
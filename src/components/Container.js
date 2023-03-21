import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`App ${className}`}>
      {children}
    </div>
  )
}

export default Container
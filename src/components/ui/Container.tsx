import React from 'react'

const Container = ({children, classNames}: {children: React.ReactNode, classNames?: string}) => {
  return (
    <div className={`max-w-7xl mx-auto  ${classNames}`}>
      {children}
    </div>
  )
}

export default Container
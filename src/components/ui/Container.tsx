import React from 'react'

const Container = ({children, classNames}: {children: React.ReactNode, classNames?: string}) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${classNames}`}>
      {children}
    </div>
  )
}

export default Container
import React from 'react'

const NavPage = () => {
  return (
    <header className='d-flex justify-content-between align-items-center'>
        <p>Page: 1</p>
        <button className='btn btn-primary btn-sm'
           onClick={ () => console.log("click")}
        >Page 2</button>
    </header>
  )
}

export default NavPage
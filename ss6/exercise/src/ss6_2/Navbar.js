import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='d-flex justify-content-between container my-4'>
        <h1><NavLink to={'/'}>library</NavLink></h1>
        <NavLink className="btn btn-primary" to={`/create`}>Add new book</NavLink>
    </div>
  )
}

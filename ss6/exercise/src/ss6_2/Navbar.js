import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <h1>library</h1>
        <NavLink to={`/create`}>Add new book</NavLink>
    </div>
  )
}

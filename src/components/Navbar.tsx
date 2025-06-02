import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex p-4 bg-gray-500 justify-between items-center'>
            <div>Shop-Swift</div>
            <Link to={"cart"} className='p-2 bg-green-600 rounded-sm'>
                <div>Cart</div>
            </Link>
        </div>
    )
}

export default Navbar
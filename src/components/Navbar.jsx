import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-success">Result</a>
                </div>

                <div className="flex-1">
                    <ul className='flex'>
                        <li>
                            <Link to={'/'}><button className="btn btn-ghost hover:text-success">Home</button></Link>
                        </li>
                        <li>
                            <Link to={'/result'}><button className="btn btn-ghost hover:text-success">Result</button></Link>
                        </li>
                        <li>
                            <Link to={'/about'}><button className="btn btn-ghost hover:text-success">About</button></Link>
                        </li>
                    </ul>
                </div>


                <div className="flex-none gap-2">
                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div> */}

                    <div className="flex-1">
                        <ul className='flex'>
                            <li>
                                <Link to={'/login'}><button className="btn btn-ghost hover:text-success">Login</button></Link>
                            </li>
                            <li>
                                <Link to={'/signup'}><button className="btn btn-ghost hover:text-success">Signup</button></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='hover:text-success'>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li className='hover:text-success'><a>Settings</a></li>
                            <li className='hover:text-success'><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
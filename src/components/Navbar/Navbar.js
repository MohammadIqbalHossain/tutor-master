import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);


    // const handleSignOut = () => {
    //     signOut(() => {

    //     })
    //         .catch(error => {

    //         })
    // }

    return (
        <>

            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#007CC2]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                        <Link className="text-xl font-bold leading-relaxed inline-block mr-4 pt-2 whitespace-nowrap capitalize text-white text-left"
                            to="/">
                            <span>Tutor Master</span>
                            <br /> 
                        </Link>
                        <br />
                        <small className="text-xm capitalize text-left mr-4 text-white">Knowlage transper</small>

                        <button
                            className="text-white cursor-pointer text-xl leading-none px-5 py-1 border border-solid border-transparent rounded bg-red-200 block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu color="blue" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center justify-center">
                            <li className="nav-item">
                                <Link
                                    className="px-5 py-2 flex items-center text-sm capitalize  leading-snug text-white hover:opacity-75"
                                    to="/"
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-5 py-2 flex items-center text-sm capitalize  leading-snug text-white hover:opacity-75"
                                    to="/blogs"
                                >
                                    <span className="ml-2 " >Training</span>
                                </Link>
                            </li>





                            <li className="nav-item">
                                <Link
                                    className="px-5 py-2 flex items-center text-sm capitalize  leading-snug text-white hover:opacity-75"
                                    to="/inventory"
                                >
                                    <span className="ml-2">About</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-5 py-2 flex items-center text-sm capitalize  leading-snug text-white hover:opacity-75"
                                    to="/inventory"
                                >
                                    <span className="ml-2 text-16 text-[#006EA9] bg-white py-3 px-8  radius-2 text-center rounded-lg">Login</span>
                                </Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
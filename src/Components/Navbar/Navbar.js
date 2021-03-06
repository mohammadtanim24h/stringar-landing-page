import React from "react";
import stringarLogo from "../../assets/images/stringar-logo.png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Parent
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <a>
                    <img width={64} src={stringarLogo} alt="" />
                </a>
                <a className="text-xl md:text-2xl font-bold">Stringar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <a className="font-semibold hover:bg-primary hover:text-white mx-1">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold hover:bg-primary hover:text-white mx-1">
                            Games
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold hover:bg-primary hover:text-white mx-1">
                            Explore
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold hover:bg-primary hover:text-white mx-1">
                            User Guide
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold hover:bg-primary hover:text-white mx-1">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex flex-col text-center font-bold mr-5">
                    <a>Mohammad Tanim</a>
                    <a>Points: <span className="text-primary">3509</span></a>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=92310" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

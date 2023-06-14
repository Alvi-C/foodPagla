import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const [logStatus, setLogStatus] = useState("Login");


    return (
        <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
            {/*  logo  */}
            <h1 className="w-3/12 font-tackyShoes text-5xl">
                <a href="">
                    FOOD PAGLA
                </a>
            </h1>

            {/* navigation  */}
            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center">
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        Cart
                    </li>
                </ul>
            </nav>

            {/* buttons  */}
            <div className="w-3/12 flex justify-end space-x-4">
                <button
                    className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/" onClick={() => { logStatus === "Login" ? setLogStatus("Logout") : setLogStatus("Login"); }}> {logStatus}
                </button>
                <button
                    className="rounded-md bg-slate-100 px-5 py-2.5 text-sm font-medium text-black"
                    href="/"> Register
                </button>
            </div>


        </header>
    )
}

export default Header;
import React from 'react';
import {AiOutlineCar} from "react-icons/ai";
import Search from "@/app/nav/Search";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-sm">
            <div className="flex items-center gap-2 text-3xl font-semibold text-red-500">
                <AiOutlineCar size={34} />
                <div>
                    Carsties Auctions
                </div>
            </div>
            <Search />
            <div>Login</div>
        </header>
    );
}

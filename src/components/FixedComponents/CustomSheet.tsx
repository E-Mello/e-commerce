'use client'

import { useState } from "react";

export function CustomSheet() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Edit profile</h2>
                    <p>Make changes to your profile here. Click save when youre done.</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" value="Pedro Duarte" className="w-full py-2 px-3 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700">Username</label>
                    <input type="text" id="username" value="@peduarte" className="w-full py-2 px-3 border rounded-lg" />
                </div>
                <div className="flex justify-end">
                    <button onClick={toggleSheet} className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800">Close</button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save changes</button>
                </div>
            </div>
        </div>
    );
}

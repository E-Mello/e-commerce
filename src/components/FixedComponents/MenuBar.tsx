'use client'

import { MdFavorite, MdShoppingCart } from "react-icons/md";
import React, { useState } from 'react';

import { IconType } from 'react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
import { RiSearch2Line } from "react-icons/ri"; // Importe o ícone de pesquisa
import petLogo from '@/assets/petshop_3.jpeg';

interface iconProps {
    name: string;
    link: string;
    icon: IconType;
}

export default function NavBar() {
    const [isLogged, setIsLogged] = useState(false);

    const handleChangeLogged = () => {
        setIsLogged(!isLogged);
    };

    const cart: iconProps = {
        name: 'Shopping Cart',
        link: '/',
        icon: () => <MdShoppingCart />,
    }

    const favoriteProducts: iconProps = {
        name: 'Favorite Products',
        link: '/',
        icon: () => <MdFavorite />,
    }

    return (
        <nav>
            <h2 className='bg-slate-200 text-black text-center'>Oferta rápida, clique aqui</h2>
            <ModeToggle className='fixed right-0 mr-5 mt-2' />
            <div className='bg-teal-500 flex pt-2 pb-1 justify-center'>
                <div className='justify-between flex w-[60vw] self-center items-center '>
                    <div className=''>
                        <Image src={petLogo} alt="Logo" width={100} height={100} />
                    </div>
                    <div className='flex items-center justify-around'>
                        <input
                            type="text"
                            placeholder="Pesquise aqui seu produto"
                            className="bg-white w-[35vw] rounded-full py-2 px-4 pl-5 focus:outline-none"
                        />
                        <RiSearch2Line className="flex cursor-pointer -mx-10  top-2 text-orange-500" size={24} />
                    </div>
                    <div className='flex gap-8'>
                        <Link href={favoriteProducts.link} className="text-2xl">
                            <span>
                                <favoriteProducts.icon />
                            </span>
                        </Link>
                        <Link href={cart.link} className="text-2xl">
                            <span>
                                <cart.icon />
                            </span>
                        </Link>
                    </div>
                    <div className=''>
                        {
                            isLogged ? (
                                <button onClick={handleChangeLogged}>Logout</button>
                            ) : (
                                <button onClick={handleChangeLogged}>Login</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

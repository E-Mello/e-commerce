'use client'

import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-teal-500 py-4 justify-center">
            <div className="container w-[60vw] mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <button
                        type="button"
                        role="button"
                        aria-label="Menu de navegação"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="menu"
                        className="text-2xl text-white p-2"
                    >
                        <svg
                            className="w-8 h-8"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            role="img"
                            aria-label="ícone menu hamburger"
                        >
                            <path className="" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                    <span className="text-xl text-white ml-2">Categorias</span>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="https://www.cobasi.com.br/compra-programada">
                            <p className="text-white hover:text-teal-300">Compra Programada</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.cobasi.com.br/programa-amigo-cobasi">
                            <p className="text-white hover:text-teal-300">Amigo Cobasi</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.cobasi.com.br/institucional/meu-desconto">
                            <p className="text-white hover:text-teal-300">Meu Desconto</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.cobasi.com.br/institucional/marcas-exclusivas">
                            <p className="text-white hover:text-teal-300">Marcas Exclusivas</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.cobasi.com.br/promocoes">
                            <p className="text-white hover:text-teal-300">Promoções</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.cobasi.com.br/nossas-lojas">
                            <p className="text-white hover:text-teal-300">Nossas Lojas</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.cobasi.com.br/minha-conta/espaco-pet">
                            <p className="text-white hover:text-teal-300">Espaço Pet</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://blog.cobasi.com.br?utm_source=site">
                            <p className="text-white hover:text-teal-300">Blog</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
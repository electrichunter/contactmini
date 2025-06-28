'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react'; // Lucide ikonları

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Contacts', href: '/contacts' },
    { label: 'About', href: '/about' },
];

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold text-blue-600">ContactMini</h1>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={toggleMenu}
                >
                    {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>

                {/* Menu Items (desktop) */}
                <nav className="hidden md:flex space-x-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-2 rounded-full transition text-sm font-medium ${
                                pathname === item.href
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Menu Items (mobile dropdown) */}
            {isOpen && (
                <nav className="md:hidden bg-gray-50 border-t border-gray-200">
                    <ul className="flex flex-col gap-2 px-4 py-4">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${
                                        pathname === item.href
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Menu;

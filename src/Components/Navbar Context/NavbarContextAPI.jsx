import React, { useContext, useState } from 'react'
import { createContext } from 'react'

//Crate Context
const NavbarContext = createContext();

//Create a Provider Component
export const NavbarProvider = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleNavbar = () => {
        setMenuOpen((prev) => !prev)
    };

    const closeNavbar = () => {
        // if (id !== "home") {
            setMenuOpen(false);
        // }
    };

    return (
        <NavbarContext.Provider value={{ isMenuOpen, toggleNavbar, closeNavbar }}>
            {children}
        </NavbarContext.Provider>
    );
};


export const useNavbar = () => {
    return useContext(NavbarContext)
}

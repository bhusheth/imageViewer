import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg='dark' fixed='top'>
                <NavbarBrand className='navbar-brand mx-auto'>Technical Exercise</NavbarBrand>
            </Navbar>
        </>
    );
}

export default Header;
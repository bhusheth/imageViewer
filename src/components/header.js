import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import '../App.css';

const Header = () => {
    return (
        <>
            <Navbar bg='dark' fixed='top'>
                <NavbarBrand className='navbar-brand mx-auto dashboard-header'>Technical Exercise</NavbarBrand>
            </Navbar>
        </>
    );
}

export default Header;
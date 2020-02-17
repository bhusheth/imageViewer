import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import '../App.css';

const Header = () => {
    return (
        <Navbar data-test='navBar' bg='dark' fixed='top'>
            <NavbarBrand data-test='dashboard-header' className='navbar-brand mx-auto dashboard-header'>Technical Exercise</NavbarBrand>
        </Navbar>
    );
}

export default Header;
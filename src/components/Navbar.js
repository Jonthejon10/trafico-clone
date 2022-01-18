import React from 'react'
import '../styles/Navbar.css'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    
    return (
        <nav className='navbar'>

            <img src={require('../images/logo.svg').default} alt={'TRAFICO LOGO'} />

            <div className='navbar-btns-container'>
                <ul>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#howto'>HOW TO</a></li>
                    <li><a href='#faq'>FAQS</a></li>
                    <li><a href='#contact'>CONTACT US</a></li>
                </ul>
            </div>

            <div className='hamburger-menu-container'>
				<HamburgerMenu />
			</div>
        </nav>
    )
}

export default Navbar

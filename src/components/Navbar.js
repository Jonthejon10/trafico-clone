import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    
    return (
        <nav className='navbar'>

            <img src={require('../images/logo.svg').default} alt={'TRAFICO LOGO'} />

            <div className='navbar-btns-container'>
                <ul>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#howto'>HOW TO</a></li>
                    <li className='faq-btn'><a href='#faq'>FAQS</a></li>
                    <li><a href='#contact'>CONTACT US</a></li>
                </ul>
            </div>

            <div className='hamburger-menu-container'>
				<button type='button' className='hamburger-btn' />
			</div>
        </nav>
    )
}

export default Navbar

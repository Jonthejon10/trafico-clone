import React, { useState } from 'react'
import '../styles/HamburgerMenu.css'

const HamburgerMenu = () => {

    const [open, setOpen] = useState(false)

    return (
		<div className='hamburger-menu-wrapper'>
            <button type='button' className='hamburger-btn' onClick={() => setOpen(true)} />

            {open &&
                <div className='hamburger-container'>

                    <button type='button' className='close-hamburger' onClick={() => setOpen(false)}>X</button>
                    <div className='hamburger-content-container'>
                        <a href="#about" onClick={() => setOpen(false)}>About</a>
                        <a href="#howto" onClick={() => setOpen(false)}>How To</a>
                        <a href="#faq" onClick={() => setOpen(false)}>FAQS</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contact us</a>
                    </div>

                </div>
            }
		</div>
	)
}

export default HamburgerMenu
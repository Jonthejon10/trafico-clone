import React from 'react'
import '../styles/Contact.css'

const Contact = () => {

    const handleClick = () => {
        alert('Work in Progress')
    }

    return (
        <div className='content-container contact-container' id='contact'>
            
            <div className='contact-top-container'>
                
                <div className='contact-card-container'>
                    
					<div className='contact-card-bar'></div>

					<p>
						We provide traffic management consultants so you get
						started quickly, contact us for a quote today!
					</p>
				</div>

                <div className='contact-form-container'>
                    
                    <form>
                        <div className='input-container'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' placeholder='Your name' />
                        </div>

                        <div className='input-container'>
                            <label htmlFor='email'>Email address</label>
                            <input
                                type='email'
                                id='email'
                                placeholder='Your email address'
                            />
                        </div>

						<button type='submit' className='orange-btn' onClick={handleClick}>
							GET STARTED
							<span>
								<img
									src={require('../images/arrow-getstarted.svg').default}
									alt=''
								/>
							</span>
						</button>
					</form>
				</div>
            </div>
            
            <div className='bottom-nav-container'>

                <nav>
                    <img src={require('../images/logo.svg').default} alt={'TRAFICO LOGO'} />

                    <div className='navbar-btns-container'>
                        <ul>
                            <li><a href='#about'>ABOUT</a></li>
                            <li><a href='#howto'>HOW TO</a></li>
                            <li><a href='#faq'>FAQS</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <footer>
                <p>Copyright @ 2019</p>

                <div className='footer-icons-container'>
                    <ul>
                        <li className='fb-icon' onClick={handleClick}></li>
                        <li className='twitter-icon' onClick={handleClick}></li>
                        <li className='ig-icon' onClick={handleClick}></li>
                    </ul>
                </div>
            </footer>
		</div>
	)
}

export default Contact

import React, { useEffect } from 'react'
import '../styles/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

	/* AOS FOR A SIMPLE CSS ANIMATION */
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div className='content-container about-container' id='about'>
            
			{/* TEXT CONTAINER */}
            <div className='about-us-text-container'>
                
				<h3 className='section-header'>ABOUT US</h3>

				<p>
					The occupational traffic permit is one of the most important
					things in the company when carrying out freight transport.
					In fact, it is a prerequisite for doing business traffic at
					all.
				</p>

                <div className='question-card'>
                    
                    <div className='card-bar'></div>
                    
					<p>
						How do you do when you need to obtain a commercial
						traffic permit for freight transport to your business ?
					</p>
				</div>
            
            </div>
            
			{/* IMAGE */}
			<img
				data-aos='fade-left'
				className='about-illustration'
				src={require('../images/illus-about.svg').default}
				alt=''
			/>
		</div>
	)
}

export default About

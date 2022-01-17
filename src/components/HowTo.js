import React, { useEffect } from 'react'
import '../styles/HowTo.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const HowTo = () => {

    useEffect(() => {
		Aos.init({ duration: 3000 })
	}, [])

    return (
		<div className='content-container howto-container' id='howto'>
			<img
				data-aos='fade-right'
				src={require('../images/illus-apply.svg').default}
				alt=''
			/>

			<div className='howto-text-container'>
				<h2 className='section-header'>HOW TO APPLY</h2>

				<p>
					When applying for a traffic permit, there are certain
					requirements that you must meet that are included in the
					examination: requirements for professional knowledge, solid
					establishment, good reputation and financial resources.
					Important to remember is to confirm your application for a
					traffic permit by the company's company signer or CEO.
				</p>
			</div>
		</div>
	)
}

export default HowTo

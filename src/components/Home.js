import React from "react"
import '../styles/Home.css'

const Home = () => {

    return (
		<div className='content-container home-container'>
			<h1>Your awesome traffic permit consultant.</h1>

			<button type='button' className='orange-btn'>
				GET STARTED{' '}
				<span>
					<img
						src={require('../images/arrow-getstarted.svg').default}
						alt=''
					/>
				</span>
			</button>

			<img
				className='car-img'
				src={require('../images/car-home.svg').default}
				alt=''
			/>
		</div>
	)
}

export default Home
import React from "react"
import '../styles/Home.css'

const Home = () => {

    return (
		<div className='content-container home-container'>
			<div className="filler"></div>

			<div className="home-middle-container">
				<h1>Your awesome <br></br> traffic permit <br></br> consultant.</h1>

				<button type='button' className='orange-btn'>
					<a href='#howto'>
					GET STARTED
					<span>
						<img
							src={require('../images/arrow-getstarted.svg').default}
							alt=''
							/>
					</span>
					</a>
				</button>
			</div>

			<div className="home-car-container">
				<img
					className='car-img'
					src={require('../images/car-home.svg').default}
					alt=''
				/>
			</div>
		</div>
	)
}

export default Home
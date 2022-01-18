import React, { useEffect, useState } from 'react'
import '../styles/Faq.css'

const Faq = () => {

    const [questions, setQuestions] = useState([])

    const [open, setOpen] = useState([])

    const [visible, setVisible] = useState(6)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://lxpi9qne2a.api.quickmocker.com/getReactFAQs')
                const resJson = await res.json()
                setQuestions(resJson.response)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    // Adding id's to each questions to be able to reference them later
    questions.forEach((question, i) => {
		question.id = i + 1
    })
    
    // Opening a single question's description using an array that holds all opened ids
    const toggleOpen = (id) => {
        if (open.includes(id)) {
            setOpen(open.filter(qid => qid !== id))
        } else {
            let newOpen = [...open]
            newOpen.push(id)
            setOpen(newOpen)
        }
    }

    const showMore = () => {
        setVisible(visible + 2)
    }

    return (
		<div className='content-container faq-container' id='faq'>
			<div className='top-content-container'>
				<div className='faq-text-container'>
					<h3 className='section-header'>FAQ</h3>

					<h2>
						Questions and Answers on Professional Traffic Permits:
					</h2>
				</div>

				<img src={require('../images/illus-faq.svg').default} alt='' />
			</div>

			<div className='questions-container'>
				{questions.slice(0, visible).map((item, index) => {
					return (
						<div key={index} className='question-card'>
							<div className='initial-content'>
								<h4>{item.title}</h4>

								<button
									type='button'
									className={
										open.includes(item.id)
											? 'minus-btn'
											: 'plus-btn'
									}
									onClick={() => toggleOpen(item.id)}
								/>
							</div>

							{open.includes(item.id) && (
								<div className='card-description-container'>
									<p>{item.Message}</p>
								</div>
							)}
						</div>
					)
				})}

				<button
					type='button'
					onClick={showMore}
                    className='loadmore-btn'>
                    <span></span>
                    LOAD MORE
                    <button type='button' className='loadmore-btn-plus' />
				</button>
			</div>
		</div>
	)
}

export default Faq

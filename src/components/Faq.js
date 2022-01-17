import React, { useEffect, useState } from 'react'
import '../styles/Faq.css'

const Faq = () => {

    const [questions, setQuestions] = useState([])

    const [questionDesc, setQuestionDesc] = useState(false)

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
                {questions.map((item, index) => {
                    return (
                        <div key={index} className='question-card'>
                            <div className='initial-content'>
                                <h4>{item.title}</h4>

                                <button
                                    type='button'
                                    className={questionDesc ? 'minus-btn' : 'plus-btn'}
                                    onClick={() => setQuestionDesc(!questionDesc)}
                                />
                            </div>
                            
                            {questionDesc &&
                                <div className='card-description-container'>
                                    <p>{item.Message}</p>
                                </div>
                            }
						</div>
					)
                })}
            </div>
		</div>
	)
}

export default Faq

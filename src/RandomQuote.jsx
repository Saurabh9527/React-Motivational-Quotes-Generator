import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './RandomQuote.css'

function RandomQuote() {
    let url = "https://api.adviceslip.com/advice";

    const [advice, setAdvice] = useState("Embrace the journey, for the joy is in the pursuit of your aspirations.");

    let getRandomQuote = async () => {
        let res = await fetch(url);
        let resJson = await res.json();
        let quoteRes = resJson.slip.advice;
        setAdvice(quoteRes)
    }
    return (
        <div className='main'>
            <div className='card'>
                <h1 className="heading"><i>{advice}</i></h1>
                <Button className='button' onClick={getRandomQuote} variant="outlined">Give Me Advice</Button>
            </div>
        </div>
    )
}

export default RandomQuote

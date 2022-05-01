import React from 'react';
import quotes from "../quotes.json"
import "../QuoteStyles.css";
import ChangeColorBackground from './ChangeColorBackground';
import { useState } from 'react';


const QuoteBox = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length)
    const [isQuote, setIsQuote] = useState(randomQuote)
    const changeQuote =()=>setIsQuote(randomQuote)
    let bodycolor =document.body.style

    console.log(randomQuote)

    return (
        <div>
            
            <div className='quotes'>
                
                <h2 className='text' style={{color:bodycolor.backgroundColor}}>
                    <i className="fa-solid fa-quote-left" style={{color:bodycolor.backgroundColor}}></i> {quotes[isQuote].quote}
                    
                </h2>
                    
                <h2 className='author' style={{color:bodycolor.backgroundColor}}>
                    {quotes[isQuote].author}
                    
                </h2>
                <button className='next'  onClick= {()=> {changeQuote();ChangeColorBackground(); }}> 
                           
                    <i className="fa-solid fa-circle-chevron-right" style={{color:bodycolor.backgroundColor}}></i>
                </button>
                
            </div>
        </div>
    );
};

export default QuoteBox;
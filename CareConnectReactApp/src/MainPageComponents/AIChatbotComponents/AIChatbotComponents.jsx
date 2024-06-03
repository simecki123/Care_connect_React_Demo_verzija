import React, { useState } from 'react';
import './AIChatbotComponentsStyle.css';

function AIChatBotComponents() {
    const responses = [
        "Nothing is wrong with you",
        "You already dead you have zombie virus",
        "You are going to die. This is emergency I'm calling 911"
    ];

    const [response, setResponse] = useState('');

    const handleSearchClick = () => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setResponse(randomResponse);
    };

    return (
        <>
            <div className='ai-chat-bot-components-big-container'>
                <div className='load-convo-container'>
                    <button className='loadConvo-button'>Load Convo</button>
                    <button className='loadConvo-button'>New convo</button>
                </div>
                <div className='textAreaContainer'>
                    <textarea className='big-textArea' value={response} disabled></textarea>
                </div>
                <div className='type-question-big-container'>
                    <button className='add-image-button'>📸</button>
                    <input type='text' className='searchbar' placeholder='Type here...' />
                    <button className='submit-btn' onClick={handleSearchClick}>🔍</button>
                </div>
            </div>
        </>
    );
}

export default AIChatBotComponents;

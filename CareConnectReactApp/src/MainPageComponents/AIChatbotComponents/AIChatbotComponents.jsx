import './AIChatbotComponentsStyle.css';


function AIChatBotComponents() {
    return(
        <>
            <div className='ai-chat-bot-components-big-container'>
                <div className='load-convo-container'>
                    <button className='loadConvo-button'>Load Convo</button>
                </div>
                <div className='textAreaContainer'>
                    <textarea className='big-textArea' disabled></textarea>
                </div>
                <div className='type-question-big-container'>
                    <button className='add-image-button'>📸</button>
                    <input type='text' className='searchbar' placeholder='Type here...' />
                    <button className='submit-btn'>🔍</button>
                </div>
            </div>
        </>
    );
}

export default AIChatBotComponents;
import React, { useState } from 'react';
import './ConvoHistoryListStyle.css';

function ConvoHistoryListComponent() {
    const [conversations, setConversations] = useState([
        'Razgovor 1',
        'Razgovor 2',
        'Razgovor 3'
    ]);

    const handleDeleteConvo = (index) => {
        const newConversations = conversations.filter((_, i) => i !== index);
        setConversations(newConversations);
    };

    const handleClearAllConvos = () => {
        setConversations([]);
    };

    return (
        <>
            <div className='convo-history-list-big-container'>
                {conversations.map((convo, index) => (
                    <div key={index} className='convo-history-container'>
                        <label className='convo-title'>{convo}</label>
                        <button className='load-convo-button'>Load</button>
                        <button className='delete-convo-button' onClick={() => handleDeleteConvo(index)}>Delete</button>
                    </div>
                ))}
                {conversations.length > 0 && (
                    <button className='delete-all-convo-button' onClick={handleClearAllConvos}>Clear all conversations</button>
                )}
            </div>
        </>
    );
}

export default ConvoHistoryListComponent;

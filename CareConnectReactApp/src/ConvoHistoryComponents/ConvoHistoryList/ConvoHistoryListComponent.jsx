import './ConvoHistoryListStyle.css';

function ConvoHistoryListComponent() {
    return(

        <>
            <div className='convo-history-list-big-container'>
                <div className='convo-history-container'>
                    <label className='convo-title'>Razgovor</label>
                    <button className='load-convo-button'>Load</button>
                    <button className='delete-convo-button'>Delete</button>
                </div>

                <div className='convo-history-container'>
                    <label className='convo-title'>Razgovor</label>
                    <button className='load-convo-button'>Load</button>
                    <button className='delete-convo-button'>Delete</button>
                </div>

                <div className='convo-history-container'>
                    <label className='convo-title'>Razgovor</label>
                    <button className='load-convo-button'>Load</button>
                    <button className='delete-convo-button'>Delete</button>
                </div>
                <button className='delete-all-convo-button'>Clear all conversations</button>
            </div>
        </>
    );
}

export default ConvoHistoryListComponent;
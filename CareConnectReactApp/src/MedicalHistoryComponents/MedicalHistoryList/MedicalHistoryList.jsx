import './MedicalHistoryStyle.css';

function MedicalHistoryListComponent() {
    return(
        <>
            <div className='medical-history-list-big-container'>
                <h2 className='medical-history-title'>Medical history</h2>
                <div className='medical-diagnosis-list-container'>
                    <label className='medical-diagnosis-title'>Broken arm</label>
                    <label className='medical-diagnosis-date'>21.3.2024</label>
                    <button className='info-medical-diagnosis-button'>Info</button>
                </div>

                <div className='medical-diagnosis-list-container'>
                    <label className='medical-diagnosis-title'>Broken arm</label>
                    <label className='medical-diagnosis-date'>21.3.2024</label>
                    <button className='info-medical-diagnosis-button'>Info</button>
                </div>

                <div className='medical-diagnosis-list-container'>
                    <label className='medical-diagnosis-title'>Broken arm</label>
                    <label className='medical-diagnosis-date'>21.3.2024</label>
                    <button className='info-medical-diagnosis-button'>Info</button>
                </div>
            </div>
        </>
    );
}

export default MedicalHistoryListComponent;
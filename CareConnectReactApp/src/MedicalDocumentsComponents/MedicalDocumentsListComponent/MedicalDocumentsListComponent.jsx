import './MedicalDocumentListStyle.css';

function MedicalDocumentListComponent() {
    return(
        <>
            <div className='medical-document-list-component-big-container'>
                <h2 className='medical-documents-title'>MedicalDocuments</h2>
                <div className='medical-documents-list-container'>
                    <label className='document-label'>Medical card</label>
                    <button className='document-label-button'>Info</button>
                </div>

                <div className='medical-documents-list-container'>
                    <label className='document-label'>ID card</label>
                    <button className='document-label-button'>Info</button>
                </div>

                
            </div>
        </>
    );
}

export default MedicalDocumentListComponent;
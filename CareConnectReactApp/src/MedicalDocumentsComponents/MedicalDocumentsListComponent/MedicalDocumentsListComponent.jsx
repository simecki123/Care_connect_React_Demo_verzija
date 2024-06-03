import React, { useState } from 'react';
import './MedicalDocumentListStyle.css';
import medicalcard from '../../assets/zdrastvena_iskaznica.jpg';
import IDCard from '../../assets/osobnaiskaznicaprednja.jpg';

function MedicalDocumentListComponent() {
    const [selectedDocument, setSelectedDocument] = useState(null);

    const documents = [
        {
            title: 'Medical card',
            image: medicalcard,
        },
        {
            title: 'ID card',
            image: IDCard,
        }
    ];

    const handleInfoClick = (index) => {
        setSelectedDocument(documents[index]);
    };

    const handleCloseModal = () => {
        setSelectedDocument(null);
    };

    return (
        <>
            <div className='medical-document-list-component-big-container'>
                <h2 className='medical-documents-title'>Medical Documents</h2>
                {documents.map((document, index) => (
                    <div key={index} className='medical-documents-list-container'>
                        <label className='document-label'>{document.title}</label>
                        <button className='document-label-button' onClick={() => handleInfoClick(index)}>Info</button>
                    </div>
                ))}
            </div>
            {selectedDocument && (
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>{selectedDocument.title}</h3>
                        <img src={selectedDocument.image} alt={selectedDocument.title} className='modal-image'/>
                        <button onClick={handleCloseModal} className='close-modal-button'>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default MedicalDocumentListComponent;

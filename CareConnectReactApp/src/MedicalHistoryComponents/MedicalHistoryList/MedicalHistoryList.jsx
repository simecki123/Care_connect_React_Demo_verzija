import React, { useState } from 'react';
import './MedicalHistoryStyle.css';

function MedicalHistoryListComponent() {
    const [selectedDiagnosis, setSelectedDiagnosis] = useState(null);

    const medicalHistory = [
        {
            title: 'Broken arm',
            date: '21.3.2024',
            description: 'A fracture in one of the bones in the arm. Treatment involves immobilization and possibly surgery.'
        },
        {
            title: 'Diabetes Type 2',
            date: '10.11.2022',
            description: 'A chronic condition that affects the way the body processes blood sugar (glucose). Treatment includes medication, diet, and exercise.'
        },
        {
            title: 'Hypertension',
            date: '5.5.2021',
            description: 'A condition in which the force of the blood against the artery walls is too high. Treatment involves lifestyle changes and medication.'
        }
    ];

    const handleInfoClick = (index) => {
        setSelectedDiagnosis(medicalHistory[index]);
    };

    const handleCloseModal = () => {
        setSelectedDiagnosis(null);
    };

    return (
        <>
            <div className='medical-history-list-big-container'>
                <h2 className='medical-history-title'>Medical History</h2>
                {medicalHistory.map((diagnosis, index) => (
                    <div key={index} className='medical-diagnosis-list-container'>
                        <label className='medical-diagnosis-title'>{diagnosis.title}</label>
                        <label className='medical-diagnosis-date'>{diagnosis.date}</label>
                        <button className='info-medical-diagnosis-button' onClick={() => handleInfoClick(index)}>Info</button>
                    </div>
                ))}
            </div>
            {selectedDiagnosis && (
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>{selectedDiagnosis.title}</h3>
                        <p>{selectedDiagnosis.description}</p>
                        <button onClick={handleCloseModal} className='close-modal-button'>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default MedicalHistoryListComponent;

import React, { useState } from 'react';
import './MedicationsListStyle.css';

function MedicationsListComponent() {
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [orderConfirmation, setOrderConfirmation] = useState(false);

    const medications = [
        {
            name: 'Paracetamol',
            description: 'Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
        },
        {
            name: 'Amoxicillin',
            description: 'Amoxicillin is used to treat a wide variety of bacterial infections. This medication is a penicillin-type antibiotic. It works by stopping the growth of bacteria.',
        },
        {
            name: 'Lisinopril',
            description: 'Lisinopril is used to treat high blood pressure (hypertension) and heart failure. It can also reduce the risk of stroke and heart attack.',
        }
    ];

    const handleInfoClick = (index) => {
        setSelectedMedication(medications[index]);
    };

    const handleOrderClick = () => {
        setOrderConfirmation(true);
        setTimeout(() => setOrderConfirmation(false), 2000);
    };

    const handleCloseModal = () => {
        setSelectedMedication(null);
    };

    return (
        <>
            <div className='medications-list-big-container'>
                <h2 className='medications-list-title'>Prescribed Medications</h2>
                <div className='automatic-order-container'>
                    <label className='automatic-order-title'>Automatic order</label>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                {medications.map((medication, index) => (
                    <div key={index} className='medication-list-element-container'>
                        <label className='medication-label'>{medication.name}</label>
                        <div className='medication-buttons-container'>
                            <button className='medication-info-button' onClick={() => handleInfoClick(index)}>Info</button>
                            <button className='medications-order-button' onClick={handleOrderClick}>Order</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedMedication && (
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>{selectedMedication.name}</h3>
                        <p>{selectedMedication.description}</p>
                        <button onClick={handleCloseModal} className='close-modal-button'>Close</button>
                    </div>
                </div>
            )}
            {orderConfirmation && (
                <div className='order-confirmation'>
                    <p>Medication has been ordered</p>
                </div>
            )}
        </>
    );
}

export default MedicationsListComponent;

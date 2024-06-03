import React, { useState } from 'react';
import './ListOfDevicesStyle.css';

function ListOfConnectedDevicesComponents() {
    const [devices, setDevices] = useState([
        'Samsung smart band',
        'Samsung S24 Ultra',
        'Hearttracker 3000'
    ]);

    const [newDevice, setNewDevice] = useState('');

    const handleAddDevice = () => {
        if (newDevice.trim() !== '') {
            setDevices([...devices, newDevice]);
            setNewDevice('');
        }
    };

    const handleDeleteDevice = (deviceToDelete) => {
        setDevices(devices.filter(device => device !== deviceToDelete));
    };

    return (
        <>
            <div className='big-devices-container'>
                <h1 className='devices-title'>Devices:</h1>
                {devices.map((device, index) => (
                    <div key={index} className='device-container'>
                        <label className='device'>{device}</label>
                        <button className='delete-device-btn' onClick={() => handleDeleteDevice(device)}>Delete</button>
                    </div>
                ))}
                <div className='add-device-container'>
                    <input
                        type='text'
                        className='new-device-input'
                        placeholder='Enter new device name'
                        value={newDevice}
                        onChange={(e) => setNewDevice(e.target.value)}
                    />
                    <button className='add-new-device-btn' onClick={handleAddDevice}>Add New Device</button>
                </div>
            </div>
        </>
    );
}

export default ListOfConnectedDevicesComponents;

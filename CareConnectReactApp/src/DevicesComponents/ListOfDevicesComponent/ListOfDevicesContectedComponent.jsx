import './ListOfDevicesStyle.css';

function ListOfConnectedDevicesComponents() {
    return(
        <>

        <div className='big-devices-container'>
            <h1 className='devices-title'>Devices:</h1>
            
            <div className='device-container'>
                <label className='device'>Samsung smart band</label>
            </div>
            <div className='device-container'>
                <label className='device'>Samsung smart band</label>
            </div>
            <div className='device-container'>
                <label className='device'>Samsung smart band</label>
            </div>

            <button className='add-new-device-btn'>Add New Device</button>
        </div>
        
        </>
    );
}

export default ListOfConnectedDevicesComponents;
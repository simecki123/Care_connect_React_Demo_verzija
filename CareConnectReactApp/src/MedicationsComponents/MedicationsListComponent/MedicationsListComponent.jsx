import './MedicationsListStyle.css';

function MedicationsListComponent() {
    return(
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

                <div className='medication-list-element-container'>
                    <label className='medication-label'>Tablete1</label>
                    <div className='medication-buttons-container'>
                        <button className='medication-info-button'>Info</button>
                        <button className='medications-order-button'>Order</button>
                    </div>
                </div>

                <div className='medication-list-element-container'>
                    <label className='medication-label'>Tablete1</label>
                    <div className='medication-buttons-container'>
                        <button className='medication-info-button'>Info</button>
                        <button className='medications-order-button'>Order</button>
                    </div>
                </div>

                <div className='medication-list-element-container'>
                    <label className='medication-label'>Tablete1</label>
                    <div className='medication-buttons-container'>
                        <button className='medication-info-button'>Info</button>
                        <button className='medications-order-button'>Order</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MedicationsListComponent;
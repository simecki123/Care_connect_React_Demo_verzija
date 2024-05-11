import HeaderComponent from "../MainPageComponents/HeaderComponents/HeaderComponent";
import ListOfConnectedDevicesComponents from "./ListOfDevicesComponent/ListOfDevicesContectedComponent";

function DevicesComponent() {
    return(
        <>
            <HeaderComponent />
            <ListOfConnectedDevicesComponents />
        </>
    );
}

export default DevicesComponent;
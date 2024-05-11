import './MainPageStyle.css'
import AIChatBotComponents from "./AIChatbotComponents/AIChatbotComponents";
import HeaderComponent from "./HeaderComponents/HeaderComponent";
import ProfileComponent from "./ProfileComponents/ProfileComponent";


function MainPageComponents() {
    return(
        <>
            <HeaderComponent />
            <div className="main-part-container">
                <ProfileComponent />
                <AIChatBotComponents />
            </div>
        </>
    );
}

export default MainPageComponents;
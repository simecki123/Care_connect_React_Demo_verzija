import profilePic1 from './assets/AndrejPlenkovic.jpg'; 
import plenkisdoctor from './assets/drscthompson.webp';
import zdrastvena from './assets/zdrastvena_iskaznica.jpg';
import osobna from './assets/osobnaiskaznicaprednja.jpg';

const remeberdProfilesData = [
    {
        id: 1,
        img: profilePic1,
        nameSurname: "Andrej Plenković",
        email: "aplenki1@gmail.com",
        password: "plenki123",
        height: 185,
        Weight: "90 kg",
        Age: 50,
        Invalid: true,
        Priority: "urgent",
        Heart_Rate: "500 p/m",
        Blood_Preassure: "high",
        Blood_Oxygen: "95",
        Stress: 200,
        devices: {
            dev1: "smarthwatch",
            dev2: "iphone15 pro"
        },
        doctor: {
            docimg: plenkisdoctor,
            desc: "Još čekam odgovor vjetra s Dinare. "
        },
        medical_history: {
            his1: "Broken arm",
            his2: "Broken spine"
        },
        medical_documents: {
            medical_card: {
                title: "Medical card",
                medical_card_image: zdrastvena
            },
            IDCard: {
                title: "ID card",
                id_card_image: osobna
            }

        },
        medications: {
            meds1: {
                medsname: "Lijek1",
                desc: "anksioznost"
            },
            meds2: {
                medsname: "Lijek2",
                desc: "Lijeci jetru"
            },
            meds3: {
                medsname: "Lijek3",
                desc: "Lijeci gljivice na nogama"
            }
        }
    },
    
        
];

export default remeberdProfilesData
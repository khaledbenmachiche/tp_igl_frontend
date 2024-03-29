import Earth from '../assets/Earth.svg' ;
import Navrbar from "../components/Navbar";
import {useNavigate} from "react-router-dom";


function WelcomePage() {
    const navigate = useNavigate();
    const handleClickEvent = () => {
        navigate("/signup");
    }
    return (
        <main className="relative w-screen h-screen overflow-hidden bg-blue-50">
            <Navrbar/>
            <div className="flex flex-col items-start ml-10 w-fit mt-28 lg:bottom-52 ">
                <h4 className="mb-10 text-sm font-semibold whitespace-nowrap font-poppins lg:text-2xl md:text-2xl">Truth
                    Finder rend plus
                    accessible la découverte <br/> d'articles scientifiques</h4>
                <p className="mb-10 text-sm font-normal whitespace-nowrap font-poppins lg:text-lg md:text-lg">Votre
                    passerelle
                    vers une
                    découverte scientifique.<br/>
                    Simplifiez l'exploration des articles savants<br/>
                    avec notre plateforme conviviale.<br/>
                    Donnez vie à votre curiosité et plongez <br/>
                    dans un monde de connaissances.
                </p>
                <button onClick={handleClickEvent} className="px-10 py-3 text-base font-medium text-white bg-blue-600 border-2 border-blue-600 hover:text-blue-800 hover:border-blue-800 rounded-xl font-poppins hover:bg-blue-100 active:bg-brand-700">
                    JOIN NOW
                </button>
            </div>
            <img className="absolute -bottom-52 md:bottom-0 md:left-[300px] lg:top-[50px] lg:left-[450px]  "
                 src={Earth} alt="earth "/>
        </main>


    );

}

export default WelcomePage  


import NavBar from "../components/NavBar";
import SignUpSection from "../components/ui/SignUpSection.tsx";
import earth from "../assets/wide_earth.svg";
const SignUp=()=>
{
    return(
        <div className="w-screen h-screen flex bg-[#EEF5FC] ">
            <SignUpSection/>
            <div>
                <NavBar/>
                <p className="text-[#0053AD] text-3xl font-poppins font-medium text-center mt-32 mb-10 ">L'INFINI DU SAVOIR VOUS ATTEND A PORTEE DE CLIC</p>
                <p className="text-2xl font-light text-center font-poppins">Votre passerelle vers une découverte scientifique<br/>Simplifiez l'exploration des articles savants <br/>avec notre plateforme conviviale.<br/>Donnez vie à votre curiosité.</p>
                <img src={earth} alt="earth" className="mt-[80px] " />
            </div>
        </div>

    );
}

export default SignUp;
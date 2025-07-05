import "../styles/LandingPage.scss";
import AuthModal from "./AuthModal";
import { useState } from "react";


export default function LoginButton() {
    const [showLogin, setShowLogin] = useState(false);

    return(
        <div>
         <button className="login-button" onClick={() => setShowLogin(true)}>
            تسجيل الدخول
        </button>
        {showLogin && <AuthModal onClose={() => setShowLogin(false)} />}
        </div>
        
    )
}
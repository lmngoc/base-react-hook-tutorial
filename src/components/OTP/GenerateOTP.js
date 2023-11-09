import { useState } from "react";
const GenerateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("");
    const handleOnClickBtn = () => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        setOrgOTP(otp);
        props.setOrgOTPParent(otp);
    }
    return (
        <div>
            <div className="generate-OTP-container">
                <button type="button" onClick={() => handleOnClickBtn()}>Gererate OTP</button>
                <div>Your OTP is:{orgOTP}</div>
            </div>
        </div>
    )
}
export default GenerateOTP;
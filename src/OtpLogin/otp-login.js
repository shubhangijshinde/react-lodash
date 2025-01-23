import React, { useState } from 'react'
import EnterOtpUI from './enter-otp';

const OtpLogin = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showEnterOtp, setShowEnterOtp] = useState(false);

    const handleSubmit = (e) => {
        const regex = /[^0-9]/g;

        if(phoneNumber.length < 9 || regex.test(phoneNumber)) {
            alert("Invalid phone number")
            return;
        }
        setShowEnterOtp(true);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onSubmitOTP = (otp) => {
        console.log("******** Login successful : ", otp)
    }

    return (
        <div>
            <h1>Login</h1>
            {!showEnterOtp ? <form onSubmit={handleSubmit}>
                <input
                    placeholder='Enter phone number'
                    value={phoneNumber}
                    type="text"
                    onChange={handlePhoneNumber}
                />
                <button style={{marginLeft: "10px"}} type="submit">Send OTP</button>
            </form> : 
            <>
                <p>Enter OTP sent to {phoneNumber}</p>
                <EnterOtpUI digits={4} onSubmitOTP={onSubmitOTP} />
            </>}
            
        </div>
    )
}

export default OtpLogin

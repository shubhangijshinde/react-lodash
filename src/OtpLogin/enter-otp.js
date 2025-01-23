import React, { useRef, useState, useEffect } from 'react'

const EnterOtpUI = ({digits = 4, onSubmitOTP = () => {}}) => {

    const inputRefs = useRef([]);
    const [otp, setOtp] = useState(new Array(digits).fill(""));

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);

        setOtp(newOtp);

        if(value && index < digits-1 && inputRefs.current[index+1]) {
            inputRefs.current[index+1].focus();
        }

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === digits) onSubmitOTP(combinedOtp);
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        // optional
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    }

    const handleKeyDown = (index, e) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div>
            {otp.map((value, index) => {
                return <input 
                    key={index}
                    value={value}
                    type="text"
                    ref = {(input) => (inputRefs.current[index] = input)}
                    onChange={(e) => handleChange(index, e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    style={{ width: '40px', height: "40px", margin:"5px", textAlign: 'center'}}
                />
            })}
        </div>
    )
}

export default EnterOtpUI

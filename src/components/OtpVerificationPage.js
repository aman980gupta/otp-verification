import React from 'react'
import { useState } from 'react'

const OtpVerificationPage = ({ input, changeInput }) => {

    const inputs = document.querySelectorAll(".inputNumber")
    const verificationBunttonHandler =()=> {
        console.log("otp verified")
    }
    const backSpaceHandler = () => {
                
        
    }
    inputs.forEach((input, index) => {
        const currentItem = input
        const nextInput = currentItem.nextElementSibling
        const previousInput = currentItem.previousElementSibling
        input.addEventListener("keydown",e=>{
            if(previousInput && e.key==="Backspace"){
                currentItem.setAttribute("disabled","")
                previousInput.focus()

            }
        })

        
        if (nextInput && nextInput.hasAttribute("disabled") && currentItem.value.length>=1) {
            nextInput.removeAttribute("disabled")
            nextInput.focus()
        }
        
        if (!nextInput && currentItem.value !==""){
            
            verificationBunttonHandler()
        }
       
    })
    return (
        <section className="varificationBox">
            <header className="header">
                <h2 className="hederText">Phone Verification</h2>
            </header>
            <div>
                <p className='p-8px_top'>Enter the OTP you received on 89206-6XXXX</p>

                <div className='inoutData'>
                    <input className='inputNumber' autoFocus type='number' 
                     autoComplete="off" autoCorrect="off" value={input.inputField1} 
                    onChange={(e)=>changeInput({
                        ...input,
                        inputField1 : e.target.value
                    })} />
                    <input className='inputNumber' type='number' autoComplete="off"  autoCorrect="off" disabled value={input.inputField2} 
                    onChange={(e)=>changeInput({
                        ...input,
                        inputField2 : e.target.value
                    })}
                    />
                    <input className='inputNumber' disabled type='number'  autoComplete="off"  autoCorrect="off" value={input.inputField3}
                    onChange={(e)=>changeInput({
                        ...input,
                        inputField3 : e.target.value
                    })}/>
                    <input className='inputNumber' type='number'  autoComplete="off" autoCorrect="off" disabled value={input.inputField4}
                    onChange={(e)=>changeInput({
                        ...input,
                        inputField4 : e.target.value
                    })} />
                    <input className='inputNumber' type='number'  autoComplete="off"  autoCorrect="off" disabled value={input.inputField5} 
                    onChange={(e)=>changeInput({
                        ...input,
                        inputField5 : e.target.value
                    })} />
                    <input className='inputNumber' disabled type='number'  autoComplete="off"  autoCorrect="off" value={input.inputField6}  maxLength="1"
                    onChange={(e)=>changeInput({
                        ...input,
                        inputField6 : e.target.value
                    })}/>
                </div>
                <div className='requestHandler'>
                    <span className='p-10px_left curser' >Change Number</span>
                    <span className='p-10px_right curser'>Re-send OTP</span>
                </div>
                <div className='btnDiv'>
                    <button className='button' onClick={()=>verificationBunttonHandler()} >VerifyPhone Number</button>

                </div>
            </div>

        </section>
    )
}

export default OtpVerificationPage
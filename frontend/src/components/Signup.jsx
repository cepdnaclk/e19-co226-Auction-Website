
import React from 'react'
import loginImage from '../assests/loginimage.avif'
import logo from '../assests/logo.jpg'
import SignupForm from './SignupForm'

const Signup = () => {
 

    return (
        <section className=" select-none h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 
        items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <div>
                    <img src={loginImage} alt="" width="900" height="600" />
                </div>
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="my-5 flex items-center">
                    <img src = {logo} alt="" width="120" height = "100"/>
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500 text-6xl">BIDCircle</p>
                </div>
                 <SignupForm/>
                
            </div>
        </section>
    );

}

export default Signup
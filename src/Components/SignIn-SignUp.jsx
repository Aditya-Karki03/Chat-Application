import { useState } from "react";

export default function SignInAndUp(){
    const[signIn,setSignIn]=useState(false);
    console.log(signIn)

    const handleToggle=()=>{
        setSignIn(!signIn);
        
    }

    return(
        <div className="w-96 h-3/5 rounded-lg flex flex-col gap-5 justify-center items-center bg-[#DDE6ED]">
            {
                signIn?
                <h2 className="font-semibold text-lg">Please do sign Up!</h2>:
                <h2 className="font-semibold text-lg">Welcome To Chat Application!</h2>
            }
            
            <div className="w-4/5 h-12">
                <input type="text" className="w-full h-full rounded-md px-2 outline-none" placeholder="Name" />
            </div>
            {
                signIn && <>
                    <div className="w-4/5 h-12">
                        <input type="text" className="w-full h-full rounded-md px-2 outline-none" placeholder="Username" />
                    </div>
                    <div className="w-4/5 h-12">
                        <input type="text" className="w-full h-full rounded-md px-2 outline-none" placeholder="Email" />
                    </div>
                </>
            }
            <div className="w-4/5 h-12">
                <input type="password" className="w-full h-full rounded-md px-2 outline-none" placeholder="Password" />
            </div>
            <button className="h-12 rounded-md bg-[#27374D] w-4/5 text-[#DDE6ED] hover:bg-[black]">{
                signIn?'Sign-Up':'Sign-In'
            }</button>
            <p>{
                    signIn?'Have an account click':'Do not have the account click'
                }<span className="font-semibold cursor-pointer " onClick={handleToggle}> Here</span></p>
        </div>
    )
}
import { useState } from "react";

export default function SignInAndUp(){
    const[signIn,setSignIn]=useState(false);
    console.log(signIn)
    return(
        <div className="w-96 h-3/5 rounded-lg flex flex-col gap-5 justify-center items-center bg-[#DDE6ED]">
            <h2 className="font-semibold text-lg">Welcome To Chat Application!</h2>
            <div className="w-4/5 h-12">
                <input type="text" className="w-full h-full rounded-md px-2 outline-none" placeholder="Name" />
            </div>
            <div className="w-4/5 h-12">
                <input type="password" className="w-full h-full rounded-md px-2 outline-none" placeholder="Password" />
            </div>
            <button className="h-12 rounded-md bg-[#27374D] w-4/5 text-[#DDE6ED]">Login</button>
            <p>Do not have the account click<span className="font-semibold" onClick={(status)=>setSignIn(!status)}> Here</span></p>
        </div>
    )
}
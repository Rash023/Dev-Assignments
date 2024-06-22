"use client"
import { useRouter } from "next/navigation"
import {signIn,signOut, useSession} from "next-auth/react"
export const Appbar=()=>{
    const session=useSession();


    return <div className="text-white flex flex-col">
        <button onClick={()=>{
           signIn()
        }}>Signin</button>
        <button onClick={()=>{
           signOut()
        }}>Logout</button>
        {JSON.stringify(session)}
    </div>
}
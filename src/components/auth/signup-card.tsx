"use client"

import { useState } from "react"
import { Button } from "@nextui-org/button"
import Image from 'next/image'
import logoPic from "@/public/images/round-logo.png"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/router"

export function SignInCard() {
    // const router = useRouter()
    const [email, setEmail] = useState("")

    return (
        <div className="flex flex-col items-center justify-center w-1/2 border border-gray-200 p-4 rounded-md h-full gap-5">
            <div className="flex flex-row items-center justify-center gap-3 mb-5">
                <div className="flex items-center justify-center">
                    <Image src={logoPic} width={50} height={50} alt="GFE Foundation logo" />
                </div>
                <p className="text-center text-2xl sm:text-3xl">
                    Welcome to{"  "} 
                    <span className="bg-gradient-to-r from-[#77C167] to-[#1A88F9] bg-clip-text font-semibold text-transparent">GFE Foundation</span>
                </p>
            </div>

            <div className="flex flex-col w-full gap-3">
                <div className="flex flex-row items-center justify-center">
                    <FcGoogle className="flex p-1" size={35} />
                    <Button className="flex text-lg">
                        Continue with Google
                    </Button>
                </div>

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <label>Password</label>
                <input type="password" />
                <Button type="submit" className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]">
                    Sign Up
                </Button>
            </div>
        </div>
    )
}







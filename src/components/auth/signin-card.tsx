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
        <div className="flex flex-col items-center justify-center w-1/3 border border-gray-200 p-4 rounded-md bg-blue-50 h-full">
            <div>
                <div className="mb-8">
                    <Image src={logoPic} width={100} height={100} alt="GFE Foundation logo" />
                </div>
                <p className="text-center text-2xl sm:text-3xl">
                    Welcome to{"  "} 
                    <span className="bg-gradient-to-r from-[#77C167] to-[#1A88F9] bg-clip-text font-semibold text-transparent">GFE Foundation</span>
                </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 w-full">
                <div>
                    <Button color="default" variant="bordered" startContent={<FcGoogle size={20} />} className="w-full mb-4">
                        Continue with Google
                    </Button>
                </div>

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <label>Password</label>
                <input type="password" />
                <Button type="submit" className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]">
                    Sign In
                </Button>
            </div>
        </div>
    )
}







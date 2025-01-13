"use client"

import { useState } from "react"
import { Button } from "@nextui-org/button"
import Image from 'next/image'
import logoPic from "@/public/images/round-logo.png"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/router"
import * as z from "zod"

export function SignUpCard() {
    // const router = useRouter()

    

    const formSchema = z.object({
        firstName: z
            .string()
            .min(1, { message: "First name is required" })
            .regex(/^\p{Letter}*$/u, { message: "Only alphabets are allowed and no spaces"}),
        lastName: z
            .string()
            .min(1, { message: "Last name is required" })
            .regex(/^\p{Letter}*$/u, { message: "Only alphabets are allowed and no spaces"}),
        email: z
            .string()
            .email({ message: "Invalid email address" }),
        password: z
            .string()
            .min(6, { message: "Password must be at least 6 characters long" }),
    })

    type UserformValue = z.infer<typeof formSchema>

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



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

                <label>First Name</label>
                <input
                    type="name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label>Last Name</label>
                <input
                    type="name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]">
                    Sign Up
                </Button>
            </div>
        </div>
    )
}







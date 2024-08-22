"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const pathName = usePathname();
    console.log(pathName);

    return <div className="fixed top-0 w-full z-[100]">
        <div className="w-full h-2 bg-gradient-to-r from-[#0061ff] to-[#60efff]" />
        <nav className="flex h-fit py-5 items-center justify-center bg-white shadow-lg overflow-clip">
            <div className="lg:w-[50%] w-[90%] mx-auto flex lg:flex-row flex-col lg:items-center lg:gap-0 justify-between">
                <div className="flex justify-between">
                    <img
                        src="/assets/Ninelabs Logo.png"
                        alt="Ninelabs Logo"
                        className="w-[150px]"
                    />
                    <button className="lg:hidden" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <ul className={`lg:flex lg:flex-row lg:h-[25px] flex-col gap-4 text-slate-600 overflow-clip transition-all ${open ? "h-[100px] mt-5 " : "h-0 mt-0"}`}>
                    <li className={`${pathName == "/" ? "text-cyan-500 font-semibold" : ""}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`${pathName.startsWith("/services") ? "text-cyan-500 font-semibold" : ""}`}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={`${pathName.startsWith("/pricing") ? "text-cyan-500 font-semibold" : ""}`}>
                        <Link href="/pricing">Harga</Link>
                    </li>
                    <li className="">
                        <Link href="/#proses">Proses</Link>
                    </li>
                    <li className="">
                        <Link href="/#pertanyaan">Pertanyaan</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}
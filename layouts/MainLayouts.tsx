import Navbar from "@/components/Navbar";
import Link from "next/link";


export default function MainLayout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <div className="relative">
                <Navbar />
                {children}
                <div className="bg-blue-500 mt-10">
                    <div className="lg:w-[60%] w-[90%] mx-auto  pt-10 pb-5">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-20">
                            <div>
                                <h1 className="text-white font-semibold text-3xl">NINELABS</h1>
                                <p className="text-gray-100 text-sm mt-3">Ninelabs adalah agency untuk pembuatan jasa pembuatan website, kelola website, dan design website profesional dengan layanan terbaik.</p>
                            </div>
                            <div>
                                <h1 className="text-white font-semibold text-3xl">Ninelabs</h1>
                                <div className="mt-5 space-y-2">
                                    <Link href="/" className="flex gap-1 items-center text-white hover:text-amber-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        Home
                                    </Link>
                                    <Link href="/services" className="flex gap-1 items-center text-white hover:text-amber-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        Services
                                    </Link>
                                    <Link href="/pricing" className="flex gap-1 items-center text-white hover:text-amber-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        Harga
                                    </Link>
                                    <Link href="/#proses" className="flex gap-1 items-center text-white hover:text-amber-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        Proses
                                    </Link>
                                    <Link href="/#pertanyaan" className="flex gap-1 items-center text-white hover:text-amber-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        Pertanyaan
                                    </Link>
                                    <Link href="" className="flex gap-1 items-center text-white hover:text-amber-300">
                                        Syarat dan Ketentuan
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white font-semibold text-3xl">Hubungi Kami</h1>
                                <div className="mt-5 space-y-2">
                                    <div className="flex gap-1 items-center text-white hover:text-amber-300">
                                        +62 851-7994-6552
                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div>
                            <h3 className="text-center mt-5 text-white font-semibold">Ninelabs copyright © 2024. All Rights Reserved.</h3>
                        </div>
                    </div>
                </div>
                <a href="https://wa.me/6285179946552" className="fixed bottom-[10px] right-[10px] w-fit h-fit">
                    <img src="/assets/wa.png" alt="Call us" className="lg:size-[80px] size-[60px]" />
                </a>
            </div>
        </>
    )
}
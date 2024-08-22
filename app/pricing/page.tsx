import MainLayout from "@/layouts/MainLayouts";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Pricing - Ninelabs",
    description: "Wujudkan website profesional yang cepat, menarik, aman, dan user-friendly untuk mengoptimalkan bisnis Anda. Kami siap mendukung kesuksesan digital Anda.",
};
export default function Pricing() {
    return <MainLayout>
        <div className="lg:w-[60%] w-[90%] mx-auto mt-20">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                        <div className="mx-auto max-w-screen-md lg:text-left text-center lg:mb-12">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-500 dark:text-white">
                                Berapa harga jasa pembuatan website?
                            </h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                Kami paham bahwa membuat website bukanlah suatu keputusan yang mudah.
                                Banyak faktor yang perlu diperhitungkan dan salah satunya adalah harga.
                            </p>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Harga pembuatan website profesional tentu dapat bervariasi, mulai dari 900 ratusan ribu hingga jutaan rupiah, tergantung kebutuhan dan goals utama yang ingin Anda capai. Ninelabs berkomitmen penuh untuk membantu Anda menemukan pilihan terbaik.
                            </p>
                        </div>
                        <div>
                            <img src="/assets/pricing.png" className="w-[60%] mx-auto" />
                        </div>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* Pricing Card */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-slate-600 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold text-slate-600">Landing Page</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Harga Mulai
                            </p>
                            <div className="items-baseline my-8">
                                <h3 className="text-xl font-bold line-through	text-slate-500">Rp1.397.000</h3>
                                <h3 className="text-4xl font-extrabold">Rp997.000</h3>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size: <span className="font-semibold">1 developer</span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Get started
                            </a>
                        </div>
                        {/* Pricing Card */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-slate-600 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold text-slate-600">Company Profile</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Harga Mulai
                            </p>
                            <div className="items-baseline my-8">
                                <h3 className="text-xl font-bold line-through	text-slate-500">Rp2.497.000</h3>
                                <h3 className="text-4xl font-extrabold">Rp1.997.000</h3>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size: <span className="font-semibold">10 developers</span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support: <span className="font-semibold">24 months</span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates: <span className="font-semibold">24 months</span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Get started
                            </a>
                        </div>
                        {/* Pricing Card */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-slate-600 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Custom Website</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Harga Mulai
                            </p>
                            <div className="items-baseline my-8">
                                <h3 className="text-xl font-bold line-through	text-slate-500">Rp4.997.000</h3>
                                <h3 className="text-4xl font-extrabold">Rp3.497.000</h3>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size: <span className="font-semibold">100+ developers</span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support: <span className="font-semibold">36 months</span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates: <span className="font-semibold">36 months</span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </MainLayout>
}
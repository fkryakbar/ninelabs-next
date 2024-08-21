import AccordionComponent from "@/components/Accordion";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full h-2 bg-gradient-to-r from-[#0061ff] to-[#60efff]" />
      <nav className="flex h-[80px] items-center justify-center bg-white shadow-lg">
        <div className="lg:w-[50%] w-[90%] mx-auto flex items-center justify-between">
          <div className="text-xl font-bold text-gradient-primary">
            <img
              src="/assets/Ninelabs Logo.png"
              alt="Ninelabs Logo"
              className="w-[150px]"
            />
          </div>
          <ul className="lg:flex gap-4 hidden text-slate-600">
            <li className="text-cyan-500 font-semibold">
              <a href="/">Home</a>
            </li>
            <li className="">
              <a href="/blog">Pertanyaan</a>
            </li>
            <li className="">
              <a href="/projects">Services</a>
            </li>
            <li className="">
              <a href="/about">Tutorial</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        style={{ backgroundImage: 'url("/assets/bg.webp")' }}
        className="relative  bg-cover bg-no-repeat lg:bg-[center_top_-60rem] md:bg-[center_top_-30rem] bg-[center_top_-10rem] overflow-clip"
      >
        <img
          src="/assets/cloud.webp"
          className="absolute lg:w-[200px] lg:top-[10px] lg:left-[150px] w-[100px] top-[10px] left-[10px] drop-shadow"
        />
        <img
          src="/assets/cloud.webp"
          className="absolute lg:w-[200px] lg:top-[180px] lg:right-[150px] w-[100px] top-[210px] -right-[50px] drop-shadow"
        />
        <div className="lg:w-[50%] w-[90%] mx-auto">
          <div className="pt-16">
            <h1 className="font-semibold lg:text-5xl text-3xl text-white text-center">
              Website Profesional tanpa Ribet untuk Meningkatkan Penjualan{" "}
              <span className="underline underline-offset-[1px] decoration-yellow-200">
                Bisnis Anda
              </span>
            </h1>
            <p className="text-center mt-5 text-slate-600 lg:text-base text-sm">
              Wujudkan website profesional yang cepat, menarik, aman, dan
              user-friendly untuk mengoptimalkan bisnis Anda. Kami siap mendukung
              kesuksesan digital Anda.
            </p>
            <div className="flex lg:flex-row flex-col items-center gap-3 justify-center mt-5">
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none  flex items-center gap-2 transition-all"
              >
                Konsultasi Gratis
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-white bg-cyan-500 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none  flex items-center gap-2  transition-all"
              >
                Langkah Kerja
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <img src="/assets/illustration.webp" className=" mx-auto mt-5" />
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] w-[90%] mx-auto mt-20">
        <p className="font-semibold text-blue-400 text-center text-xl">
          Jasa Pembuatan Website
        </p>
        <h1 className="font-semibold text-slate-600 text-center text-4xl">
          All in One Solution
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-10">
          <div className="rounded-xl shadow-md p-4 hover:scale-[1.02] cursor-pointer hover:border-2  hover:border-blue-500  transition-all">
            <img src="/assets/Web Design.png" alt="" />
            <div className="text-center">
              <h3 className="font-bold text-slate-600 text-lg">
                Jasa Pembuatan Landing Page
              </h3>
              <p className="text-sm mt-2 text-slate-600">
                Layanan jasa pembuatan website berupa landing page yang profesional
                dan berkualitas.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a href="/" className="text-blue-500 flex items-center gap-2">
                Info Detail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-md p-4 hover:scale-[1.02] cursor-pointer hover:border-2  hover:border-blue-500  transition-all">
            <img src="/assets/Product Service.png" alt="" />
            <div className="text-center">
              <h3 className="font-bold text-slate-600 text-lg">
                Jasa Pembuatan Website Company Profile
              </h3>
              <p className="text-sm mt-2 text-slate-600">
                Layanan pembuatan website untuk perusahaan atau produk anda.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a href="/" className="text-blue-500 flex items-center gap-2">
                Info Detail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-md p-4 hover:scale-[1.02] cursor-pointer hover:border-2  hover:border-blue-500  transition-all">
            <img src="/assets/Creative Service.png" alt="" />
            <div className="text-center">
              <h3 className="font-bold text-slate-600 text-lg">
                Jasa Kelola Website
              </h3>
              <p className="text-sm mt-2 text-slate-600">
                Layanan maintenance website teraman dan termurah dengan harga
                ekonomis yang bisa dibayar perbulan.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a href="/" className="text-blue-500 flex items-center gap-2">
                Info Detail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-md p-4 hover:scale-[1.02] cursor-pointer hover:border-2  hover:border-blue-500  transition-all">
            <img src="/assets/Custom Service.png" alt="" />
            <div className="text-center">
              <h3 className="font-bold text-slate-600 text-lg">
                Jasa Website Custom
              </h3>
              <p className="text-sm mt-2 text-slate-600">
                Jasa pembuatan website custom seperti sistem informasi perkantoran.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a href="/" className="text-blue-500 flex items-center gap-2">
                Info Detail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] w-[90%] mx-auto mt-20">
        <p className="font-semibold text-blue-400 text-center text-xl">
          Langkah Pembuatan website yang mudah bersama kami
        </p>
        <h1 className="font-semibold text-slate-600 text-center text-4xl">
          Alur Proses Pengerjaan
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="relative">
            <img src="/assets/Alur.png" alt="Alur" className="sticky top-0" />
          </div>
          <div className="space-y-5">
            <div className="rounded-lg shadow-md bg-white p-5 flex">
              <div className="rounded-full bg-blue-500 p-3 font-bold text-white size-10 flex justify-center items-center">
                01
              </div>
              <div>
                <h1 className="font-semibold text-slate-600 text-lg ml-5">Jelaskan Kebutuhan</h1>
                <p className="text-sm text-slate-600 ml-5">Sampaikan kebutuhan Anda dengan mengisi brief atau berdiskusi dengan tim pengembang kami, TANPA BIAYA!</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-5 flex">
              <div className="rounded-full bg-blue-500 p-3 font-bold text-white size-10 flex justify-center items-center">
                02
              </div>
              <div>
                <h1 className="font-semibold text-slate-600 text-lg ml-5">Analisa Kebutuhan</h1>
                <p className="text-sm text-slate-600 ml-5">Kami akan menganalisis kebutuhan Anda untuk menghasilkan konsep yang matang dan optimal.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-5 flex">
              <div className="rounded-full bg-blue-500 p-3 font-bold text-white size-10 flex justify-center items-center">
                03
              </div>
              <div>
                <h1 className="font-semibold text-slate-600 text-lg ml-5">Proposal Penawaran</h1>
                <p className="text-sm text-slate-600 ml-5">Kami akan mengirimkan proposal yang mencakup rincian penawaran dan estimasi waktu pengerjaan website.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-5 flex">
              <div className="rounded-full bg-blue-500 p-3 font-bold text-white size-10 flex justify-center items-center">
                04
              </div>
              <div>
                <h1 className="font-semibold text-slate-600 text-lg ml-5">Mulai Pengerjaan Project</h1>
                <p className="text-sm text-slate-600 ml-5">Setelah down payment 50% dari harga yang disepakati, kami akan memulai pengerjaan website sesuai schedule yang sudah ditetapkan.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-5 flex">
              <div className="rounded-full bg-blue-500 p-3 font-bold text-white size-10 flex justify-center items-center">
                05
              </div>
              <div>
                <h1 className="font-semibold text-slate-600 text-lg ml-5">Feedback</h1>
                <p className="text-sm text-slate-600 ml-5">Anda akan meninjau website yang telah dibuat, dan kami akan melakukan revisi jika diperlukan.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-5 flex">
              <div className="rounded-full bg-blue-500 p-3 font-bold text-white size-10 flex justify-center items-center">
                06
              </div>
              <div>
                <h1 className="font-semibold text-slate-600 text-lg ml-5">Project Selesai</h1>
                <p className="text-sm text-slate-600 ml-5">Setelah pelunasan, kami akan memberikan akses dan panduan pengguna kepada Anda.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-5 flex">
              <div className="rounded-full bg-blue-500 p-3 font-bold text-white size-10 flex justify-center items-center">
                07
              </div>
              <div>
                <h1 className="font-semibold text-slate-600 text-lg ml-5">After Sales Support</h1>
                <p className="text-sm text-slate-600 ml-5">Kami akan menyediakan dukungan dan pemeliharaan untuk memastikan website Anda selalu berfungsi secara optimal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 overflow-clip">
        <div className="lg:w-[60%] w-[90%] mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-slate-600 text-center lg:text-left text-4xl">
                Perlu bantuan?
              </h1>
              <p className="font-semibold text-blue-400 text-xl text-center lg:text-left">
                Jangan khawatir! Cari dan temukan pertanyaanmu disini
              </p>
            </div>
            <div>
              <img src="/assets/Faq.png" alt="" />
            </div>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <AccordionComponent />
            </div>
            <div className="flex justify-center flex-col gap-4">
              <div className="w-full shadow-xl rounded-md p-5 flex gap-3 items-center lg:relative">
                <img src="/assets/konsultasi.png" className="w-[180px] absolute lg:bottom-[40px] lg:-right-[70px] md:mt-0 bottom-[80px] -right-[40px]" />
                <div>
                  <h1 className="font-semibold text-slate-600 text-xl">Diskusikan Bisnis Anda Bersama Kami</h1>
                  <p className="text-sm text-slate-600">Ingin konsultasi terlebih dahulu ? Konsultasikan secara gratis sekarang.</p>
                  <a
                    className="text-white w-fit mt-4 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none  flex items-center gap-2 transition-all"
                  >
                    Konsultasi Gratis
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="lg:size-[100px] size-[200px]">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <a href="" className="flex gap-1 items-center text-white hover:text-amber-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                  Home
                </a>
                <a href="" className="flex gap-1 items-center text-white hover:text-amber-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                  Pertanyaan
                </a>
                <a href="" className="flex gap-1 items-center text-white hover:text-amber-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                  Services
                </a>
                <a href="" className="flex gap-1 items-center text-white hover:text-amber-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                  Tutorial
                </a>
                <a href="" className="flex gap-1 items-center text-white hover:text-amber-300">
                  Syarat dan Ketentuan
                </a>
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
    </div>

  );
}

"use client"

import { Accordion, AccordionItem } from "@nextui-org/react"

export default function AccordionComponent() {
    return (
        <Accordion isCompact>
            <AccordionItem key="1" aria-label="Accordion 1" title="Apa sih Ninelabs?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Ninelabs merupakan platform pembuatan website secara instan untuk membantu bisnis ataupun perusahaan untuk mempunyai website secara mudah dan murah.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Bagaimana cara melakukan pembelian website di Ninelabs?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Caranya yaitu dengan menghubungi kontak kami menggunakan WhatsApp, kemudian ceritakan kebutuhanmu kepada kami. Kami akan memberikan solusi atas permasalahan anda.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Bagaimana pembayaran Ninelabs?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Pembayaran di Ninelabs dapat dilakukan transfer ke rekening kami ketika kami sudah menerbitkan invoice pembayaran.
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Apa yang terjadi setelah saya melakukan pembayaran?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Kami akan segera mengerjakan websitenya sesuai dengan jadwal yang sudah disepakati.
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" title="Bagaimana cara melakukan perpanjangan website saya di Ninelabs?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Kami akan menghubungi anda untuk memperpanjang website maksimal 1 minggu sebelum masa perpanjangan website berakhir. Kemudian kami akan menerbitkan invoice perpanjangan.
            </AccordionItem>
            <AccordionItem key="6" aria-label="Accordion 6" title="Bisakah saya mengganti domain website saya di Ninelabs?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Sangat bisa!. namun nanti akan ada biaya tambahan karena domain yang sudah terdaftar tidak bisa diganti jadi harus memberi domain dengan nama yang baru.
            </AccordionItem>
            <AccordionItem key="7" aria-label="Accordion 7" title="Bisakah membatalkan pembelian website di Ninelabs?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Mohon maaf ya. kami belum bisa melakukan refund. karena website yang sudah jalan atau domain yang sudah jalan itu tidak dapat dibatalkan lagi di sistem domain.
            </AccordionItem>
            <AccordionItem key="8" aria-label="Accordion 8" title="Apakah Saya bisa berkonsultasi terlebih dahulu?" classNames={{ title: "font-bold text-slate-600", content: "text-slate-600 text-sm" }}>
                Sangat bisa, sebelum melakukan transaksi silahkan sampaikan permasalahan kamu dengan menghubungi kami yaa.
            </AccordionItem>
        </Accordion>
    )
}
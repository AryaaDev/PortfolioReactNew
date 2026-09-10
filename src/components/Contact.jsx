export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <h2>Contact <span>Me</span></h2>
                <h4><span>Let's work</span> Together</h4>

                <p>"Barang siapa yang ingin dilapangkan rezekinya dan dipanjangkan umurnya, maka hendaklah ia menyambung tali silaturahmi."</p>
                <p><i>(Hadis riwayat Bukhari dan Muslim)</i></p>

                <p>Ini bukan akhir, melainkan sebuah awal. Terima kasih atas kesempatan untuk menunjukkan potensi saya, dan semoga kita bisa berkolaborasi di masa depan.</p>

                <div className="contact-info">
                    <ul className="contact-list">
                        <li>
                            <i className="bx bxs-send"></i>
                            <a href="mailto:mhmmdaryadarmawan@gmail.com"
                                style={{ color: 'inherit', textDecoration: 'none' }}>mhmmdaryadarmawan@gmail.com</a>
                        </li>
                        <li>
                            <i className="bx bxs-phone"></i>
                            <a href="https://wa.me/62895361108376" target="_blank" rel="noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none' }}>+62 895 3611 08376</a>
                        </li>
                        <li>
                            <i className="bx bxs-map"></i>
                            <a href="https://www.google.com/maps/place/Bogor,+Jawa+Barat" target="_blank" rel="noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none' }}>Bogor, Indonesia</a>
                        </li>
                    </ul>

                    <div className="contact-actions">
                        <div className="contact-social">
                            <a href="https://www.instagram.com/aryaadrmwn" target="_blank" rel="noreferrer" style={{ '--i': 7 }}>
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://wa.me/62895361108376" target="_blank" rel="noreferrer">
                                <i className="bx bxl-whatsapp"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/muhamad-arya-darmawan" target="_blank" rel="noreferrer">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a href="https://www.tiktok.com/@darmawanaryaa" target="_blank" rel="noreferrer">
                                <i className="bx bxl-tiktok"></i>
                            </a>
                        </div>
                        {/* UBAH BARIS INI: Tambahkan import.meta.env.BASE_URL */}
                        <a href={`${import.meta.env.BASE_URL}CV_FHD.pdf`} target="_blank" rel="noopener noreferrer" className="btn-cv-duotone" aria-label="Lihat CV">
                            <i className="bx bx-download"></i>
                            <span>Lihat CV </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <form action="https://formspree.io/f/xqekjvod" method="POST">
                    <div className="form-group">
                        <input type="text" name="nama" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="subject" placeholder="Your Subject" required />
                    </div>

                    <div className="form-group">
                        <textarea name="pesan" placeholder="Your Message" required></textarea>
                        <input type="submit" value="Submit" className="send" />
                    </div>
                </form>
            </div>
        </section>
    );
}
// IMPORT GAMBAR SERTIFIKAT DARI FOLDER ASSETS
import sertifikatDicodingAI from '../assets/Sertifikat_Dicoding_MuhamadAryaDarmawan_4_page-0001.webp';
import sertifikatSeminar from '../assets/img4.webp';

export default function Certificates() {
    return (
        <section id="certificates" className="certificates style-1">
            <div className="global-section-header">
                <h2>My <span>Certificate</span></h2>
                <p>Berikut adalah beberapa sertifikat yang telah saya peroleh dalam perjalanan belajar saya</p>
            </div>
            <div className="certificates-container">
                
                {/* --- SERTIFIKAT 1 --- */}
                <div className="certificate-item">
                    <div className="certificate-slider" id="certificate-slider-2">
                        {/* Tombol slide kiri dihapus dari sini */}
                        <div className="slider-images">
                            <img 
                                src={sertifikatDicodingAI} 
                                alt="" 
                                className="slider-img active" 
                                loading="lazy" 
                            />
                        </div>
                        {/* Tombol slide kanan dihapus dari sini */}
                    </div>
                    <div className="certificate-desc">
                        
                        {/* 👇 TAMBAHAN BADGE PINK DI SINI 👇 */}
                        <span className="certificate-category">KURSUS AI</span>
                        
                        <h3>Belajar Dasar AI </h3>
                        <p>Diberikan atas keberhasilan menyelesaikan kelas Belajar Dasar AI dari Dicoding Indonesia.
                            Sertifikat ini menandakan penguasaan kompetensi dasar dalam bidang kecerdasan buatan dan berlaku
                            hingga 7 November 2028.</p>
                        <div className="certificate-meta">
                            <span className="certificate-date"><i className='bx bx-calendar'></i> November 2025</span>
                        </div>
                    </div>
                </div>

                {/* --- SERTIFIKAT 2 --- */}
                <div className="certificate-item">
                    <div className="certificate-slider" id="certificate-slider-1">
                        {/* Tombol slide kiri dihapus dari sini */}
                        <div className="slider-images">
                            <img 
                                src={sertifikatSeminar} 
                                alt="" 
                                className="slider-img active" 
                                loading="lazy" 
                            />
                        </div>
                        {/* Tombol slide kanan dihapus dari sini */}
                    </div>
                    <div className="certificate-desc">
                        
                        {/* 👇 TAMBAHAN BADGE PINK DI SINI 👇 */}
                        <span className="certificate-category">SEMINAR KAMPUS</span>
                        
                        <h3>FROM CAMPUS TO CHAMPIONSHIP</h3>
                        <p>Diberikan oleh Universitas Indraprasta PGRI sebagai pengakuan atas partisipasi dalam kegiatan
                            pengembangan prestasi nasional. Sertifikat ini mencerminkan keterlibatan dalam pengembangan
                            potensi mahasiswa.</p>
                        <div className="certificate-meta">
                            <span className="certificate-date"><i className='bx bx-calendar'></i>Desember 2025</span>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Modal Lightbox Sertifikat */}
            <div id="certificateModal" className="lightbox-modal" role="dialog" aria-labelledby="certificateCaption"
                aria-hidden="true">
                <span className="close-lightbox" aria-label="Close modal">&times;</span>
                <img className="lightbox-content" id="certificateImg" alt="" />
                <div id="certificateCaption"></div>
            </div>
        </section>
    );
}
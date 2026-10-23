// Proyek 1: Web At-Taqwa
import web1 from '../assets/Web1.webp';
import web2 from '../assets/Web2.webp';
import web3 from '../assets/Web3.webp';
import web4 from '../assets/Web4.webp';
import web5 from '../assets/Web5.webp';

// Proyek 2: Fan's Food
import fansNasiAyam from '../assets/Nasi Ayam Bakar Sambal Ijo_PESONA.webp';
import fansBanner from '../assets/banner-depan-uk-1000x500mm.webp';
import fansDesain from '../assets/Fan\'sFood.webp'; // Menggunakan \ escape character jika ada tanda kutip di nama file
import fansLogo from '../assets/logo-fan_s-food.webp';
import fansFoto from '../assets/foto-fans-food2.webp';

// Proyek 3: Ichiwallet
import app1 from '../assets/APP1.webp';
import app2 from '../assets/APP2.webp';
import app3 from '../assets/APP3.webp';
import app4 from '../assets/APP4.webp';
import app5 from '../assets/APP5.webp';
import app6 from '../assets/APP6.webp';

// Proyek 4: Apparel
import apparelTshirt from '../assets/T-SHIRT-MARKETING-MILISI-KECOA.webp';
import apparelDesignNew from '../assets/designNew.webp';
import apparelDesign from '../assets/design.webp';

// Proyek 5: Numeric Engine
import numericKalkulator from '../assets/kalkulator.webp';
import numericBackend from '../assets/backend.webp';
import numericBackend2 from '../assets/backend2.webp';
import numericUI from '../assets/UIKalkulator.webp';

import adobeExpress from '../assets/adobe.svg';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="global-section-header">
                <h2>My <span>Project</span></h2>
                <p>Beberapa project terbaik yang pernah saya kerjakan</p>
            </div>

            <div className="portfolio-filter">
                <button className="filter-btn active" data-filter="all">All</button>
                <button className="filter-btn" data-filter="web">Web</button>
                <button className="filter-btn" data-filter="design">Design</button>
                <button className="filter-btn" data-filter="app">App</button>
                <button className="filter-btn" data-filter="cybersecurity">Cybersecurity</button>
            </div>

            {/* WADAH UTAMA 3D CAROUSEL */}
            <div className="portfolio-3d-wrapper">
                <div className="portfolio-empty-state" aria-hidden="true">
                    <i className="bx bx-folder-open"></i>
                    <span>No projects available</span>
                </div>

                {/* PROYEK 1: Web At-Taqwa */}
                <div className="portfolio-item" data-category="web">
                    <div className="portfolio-slider" id="portfolio-slider-1">
                        <button className="slider-btn slider-btn-left" onClick={() => window.slidePortfolio(1, -1)} aria-label="Previous image"><i className="bx bx-chevron-left"></i></button>
                        <div className="slider-images">
                            <img src={web4} alt="" className="slider-img active" loading="lazy" />
                            <img src={web1} alt="" className="slider-img" loading="lazy" />
                            <img src={web2} alt="" className="slider-img" loading="lazy" />
                            <img src={web3} alt="" className="slider-img" loading="lazy" />
                            <img src={web5} alt="" className="slider-img" loading="lazy" />
                        </div>
                        <button className="slider-btn slider-btn-right" onClick={() => window.slidePortfolio(1, 1)} aria-label="Next image"><i className="bx bx-chevron-right"></i></button>
                    </div>
                    <div className="portfolio-desc">
                        <div className="desc-header-top">
                            <div className="desc-header-titles">
                                <span className="badge-category">WEB DEV</span>
                                <h3>Website Masjid At-Taqwa</h3>
                            </div>
                            <a href="https://maps.app.goo.gl/XMfM1E5cBURVrzFV9" className="portfolio-link-icon" target="_blank" rel="noreferrer" aria-label="View project">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                        <p>Ketua Pelaksana program MBKM (Merdeka Belajar–Kampus Merdeka) semester 1. Bersama tim, merancang dan meluncurkan website resmi Masjid At-Taqwa Poltangan dengan fokus UI/UX modern dan responsif</p>
                        <div className="portfolio-footer">
                            <div className="portfolio-tools">
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="14" alt="HTML" /> HTML
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="14" alt="CSS" /> CSS
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="14" alt="JS" /> JS
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width="14" alt="Bootstrap" /> Bootstrap
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="14" alt="SCSS" /> SCSS
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="14" alt="PHP" /> PHP
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="14" alt="MySQL" /> MySQL
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="14" alt="Figma" /> Figma
                                </span>
                            </div>
                            <span className="project-date"><i className='bx bx-calendar'></i> Nov - Des 2024</span>
                        </div>
                    </div>
                </div>

                {/* PROYEK 2: Fan's Food */}
                <div className="portfolio-item" data-category="design">
                    <div className="portfolio-slider" id="portfolio-slider-2">
                        <button className="slider-btn slider-btn-left" onClick={() => window.slidePortfolio(2, -1)} aria-label="Previous image"><i className="bx bx-chevron-left"></i></button>
                        <div className="slider-images">
                            <img src={fansNasiAyam} alt="" className="slider-img active" loading="lazy" />
                            <img src={fansBanner} alt="" className="slider-img" loading="lazy" />
                            <img src={fansDesain} alt="" className="slider-img" loading="lazy" />
                            <img src={fansLogo} alt="" className="slider-img" loading="lazy" />
                            <img src={fansFoto} alt="" className="slider-img" loading="lazy" />
                        </div>
                        <button className="slider-btn slider-btn-right" onClick={() => window.slidePortfolio(2, 1)} aria-label="Next image"><i className="bx bx-chevron-right"></i></button>
                    </div>
                    <div className="portfolio-desc">
                        <div className="desc-header-top">
                            <div className="desc-header-titles">
                                <span className="badge-category">DESIGN</span>
                                <h3>Restoran Fan's Food</h3>
                            </div>
                            <a href="https://maps.app.goo.gl/VPiFpUZd7jmcrbJZ6" className="portfolio-link-icon" target="_blank" rel="noreferrer" aria-label="View project">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                        <p>Proyek sebagai Graphic Designer di restoran Fan's Food. Di sini, saya merancang materi visual dan memahami alur kerja serta dinamika industri kuliner untuk memperluas perspektif kreatif.</p>
                        <div className="portfolio-footer">
                            <div className="portfolio-tools">
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" width="14" alt="Canva" /> Canva
                                </span>
                                <span className="tool-badge">
                                    <img
                                        src={adobeExpress}
                                        width="14"
                                        height="14"
                                        alt="Adobe Express"
                                    />
                                    Adobe Express
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" width="14" alt="Photoshop" /> Photoshop
                                </span>
                            </div>
                            <span className="project-date"><i className='bx bx-calendar'></i> Jul - Des 2025</span>
                        </div>
                    </div>
                </div>

                {/* PROYEK 3: ICHIWALLET */}
                <div className="portfolio-item" data-category="design">
                    <div className="portfolio-slider" id="portfolio-slider-3">
                        <button className="slider-btn slider-btn-left" onClick={() => window.slidePortfolio(3, -1)} aria-label="Previous image"><i className="bx bx-chevron-left"></i></button>
                        <div className="slider-images">
                            <img src={app1} alt="" className="slider-img active" loading="lazy" />
                            <img src={app2} alt="" className="slider-img" loading="lazy" />
                            <img src={app3} alt="" className="slider-img" loading="lazy" />
                            <img src={app4} alt="" className="slider-img" loading="lazy" />
                            <img src={app5} alt="" className="slider-img" loading="lazy" />
                            <img src={app6} alt="" className="slider-img" loading="lazy" />
                        </div>
                        <button className="slider-btn slider-btn-right" onClick={() => window.slidePortfolio(3, 1)} aria-label="Next image"><i className="bx bx-chevron-right"></i></button>
                    </div>
                    <div className="portfolio-desc">
                        <div className="desc-header-top">
                            <div className="desc-header-titles">
                                <span className="badge-category">DESIGN UI/UX MOBILE APP</span>
                                <h3>ICHIWALLET – Digital Wallet For Everyone</h3>
                            </div>
                        </div>
                        <p>Ichiwallet hadir sebagai ekosistem keuangan personal yang menyatukan kecanggihan teknologi dengan kemudahan penggunaan. Satu Genggaman, Ribuan Kemudahan.</p>
                        <div className="portfolio-footer">
                            <div className="portfolio-tools">
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="14" alt="Figma" /> Figma
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" width="14" alt="Canva" /> Canva
                                </span>
                            </div>
                            <span className="project-date"><i className='bx bx-calendar'></i> Ags 2025</span>
                        </div>
                    </div>
                </div>

                {/* PROYEK 4: Apparel */}
                <div className="portfolio-item" data-category="design">
                    <div className="portfolio-slider" id="portfolio-slider-4">
                        <button className="slider-btn slider-btn-left" onClick={() => window.slidePortfolio(4, -1)} aria-label="Previous image"><i className="bx bx-chevron-left"></i></button>
                        <div className="slider-images">
                            <img src={apparelTshirt} alt="" className="slider-img active" loading="lazy" />
                            <img src={apparelDesignNew} alt="" className="slider-img" loading="lazy" />
                            <img src={apparelDesign} alt="" className="slider-img" loading="lazy" />
                        </div>
                        <button className="slider-btn slider-btn-right" onClick={() => window.slidePortfolio(4, 1)} aria-label="Next image"><i className="bx bx-chevron-right"></i></button>
                    </div>
                    <div className="portfolio-desc">
                        <div className="desc-header-top">
                            <div className="desc-header-titles">
                                <span className="badge-category">DESIGN</span>
                                <h3>Apparel Designer</h3>
                            </div>
                        </div>
                        <p>Merancang desain visual untuk produk pakaian. Fokus utama saya adalah membuat desain yang rapi, menarik, dan menyesuaikan komposisi warna agar proporsional pada kain.</p>
                        <div className="portfolio-footer">
                            <div className="portfolio-tools">
                                <span className="tool-badge">
                                    <img src="https://cdn.simpleicons.org/coreldraw/27CA41" width="14" alt="CorelDraw" /> CorelDraw
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" width="14" alt="Illustrator" /> Illustrator
                                </span>
                                <span className="tool-badge">
                                    <img
                                        src={adobeExpress}
                                        width="14"
                                        height="14"
                                        alt="Adobe Express"
                                    />
                                    Adobe Express
                                </span>
                            </div>
                            <span className="project-date"><i className='bx bx-calendar'></i> Jan 2025 - Jul 2026</span>
                        </div>
                    </div>
                </div>

                {/* PROYEK 5: Numeric Engine */}
                <div className="portfolio-item" data-category="web">
                    <div className="portfolio-slider" id="portfolio-slider-5">
                        <button className="slider-btn slider-btn-left" onClick={() => window.slidePortfolio(5, -1)} aria-label="Previous image"><i className="bx bx-chevron-left"></i></button>
                        <div className="slider-images">
                            <img src={numericKalkulator} alt="" className="slider-img active" loading="lazy" />
                            <img src={numericBackend} alt="" className="slider-img" loading="lazy" />
                            <img src={numericBackend2} alt="" className="slider-img" loading="lazy" />
                            <img src={numericUI} alt="" className="slider-img" loading="lazy" />
                        </div>
                        <button className="slider-btn slider-btn-right" onClick={() => window.slidePortfolio(5, 1)} aria-label="Next image"><i className="bx bx-chevron-right"></i></button>
                    </div>
                    <div className="portfolio-desc">
                        <div className="desc-header-top">
                            <div className="desc-header-titles">
                                <span className="badge-category">WEB DEV</span>
                                <h3>NUMERIC ENGINE - Built for ease</h3>
                            </div>
                            <a href="https://aryaadev.github.io/NumericEngine-Kelompok1R4U/" className="portfolio-link-icon" target="_blank" rel="noreferrer" aria-label="View project">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                        <p>Lead Developer dalam pengembangan Kalkulator Metode Numerik berbasis web, bertanggung jawab atas arsitektur aplikasi, implementasi algoritma, fitur perhitungan, dan ekspor PDF untuk mendukung kegiatan akademik mahasiswa dan dosen.</p>
                        <div className="portfolio-footer">
                            <div className="portfolio-tools">
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="14" alt="HTML" /> HTML
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="14" alt="CSS" /> CSS
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="14" alt="JS" /> JS
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="14" alt="Node.js" /> Node.js
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.simpleicons.org/express/ffffff" width="14" alt="Express" />Express.js
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.simpleicons.org/github/ffffff" width="14" alt="GitHub" />GitHub
                                </span>
                                <span className="tool-badge">
                                    <img src="https://cdn.simpleicons.org/vercel/ffffff" width="14" alt="Vercel" />Vercel
                                </span>
                            </div>
                            <span className="project-date"><i className='bx bx-calendar'></i> Mei 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* NAVIGASI UTAMA 3D CAROUSEL BAWAH */}
            <div className="carousel-controls">
                <button className="carousel-btn" onClick={() => window.prevProject()}>
                    <i className='bx bx-chevron-left'></i>
                </button>

                <div className="carousel-center-nav">
                    <div className="carousel-counter" id="portfolio-counter">
                        <span className="current">01</span>
                        <span className="divider"> / </span>
                        <span className="total">05</span>
                    </div>

                    <div className="carousel-dots">
                        <button className="dot active" onClick={() => window.goToProject(1)} aria-label="Go to project 1"></button>
                        <button className="dot" onClick={() => window.goToProject(2)} aria-label="Go to project 2"></button>
                        <button className="dot" onClick={() => window.goToProject(3)} aria-label="Go to project 3"></button>
                        <button className="dot" onClick={() => window.goToProject(4)} aria-label="Go to project 4"></button>
                        <button className="dot" onClick={() => window.goToProject(5)} aria-label="Go to project 5"></button>
                    </div>
                </div>

                <button className="carousel-btn" onClick={() => window.nextProject()}>
                    <i className='bx bx-chevron-right'></i>
                </button>
            </div>

            {/* Modal Lightbox Portofolio */}
            <div id="imageModal" className="lightbox-modal">
                <span className="close-lightbox">&times;</span>
                <img className="lightbox-content" id="lightboxImg" alt="Lightbox" />
                <div id="lightboxCaption"></div>
            </div>
        </section>
    );
}
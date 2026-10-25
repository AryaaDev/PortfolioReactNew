import fotoAbout from '../assets/16.webp';

export default function About() {
    return (
            <section id="about" className="about">
                <div className="about-img">
                <img src={fotoAbout} alt="Foto Pribadi" />
            </div>
            <div className="about-text">
                <h2>About <span>Me</span></h2>

                <p>Saya adalah Software Developer yang detail-oriented dan mahasiswa Teknik Informatika di Universitas Indraprasta PGRI, dengan keahlian inti pada full-stack web development, integrasi AI, manajemen database, dan desain UI/UX. Saya memiliki pengalaman lintas disiplin, mulai dari perancangan arsitektur backend untuk aplikasi komputasi numerik, pengembangan website institusi, hingga perancangan antarmuka untuk ekosistem digital wallet dan komersial B2C.
                Didukung alur kerja pengembangan modern dan pemanfaatan AI untuk efisiensi, saya membangun sistem yang andal dan scalable melalui penerapan clean code, optimasi performa, serta UI yang interaktif. Baik memimpin tim maupun bekerja mandiri, saya mengutamakan komunikasi adaptif, pemecahan masalah terstruktur, serta komitmen untuk menghadirkan solusi digital yang modern dan user-focused.</p>

                <div className="statistik-about">
                    <div className="kotak-statistik-about">
                        <h3>5+</h3>
                        <p>Projects Shipped</p>
                    </div>
                    <div className="kotak-statistik-about">
                        <h3>9</h3>
                        <p>Languages</p>
                    </div>
                    <div className="kotak-statistik-about">
                        <h3>10+</h3>
                        <p>GitHub Repos</p>
                    </div>
                    <div className="kotak-statistik-about">
                        <h3>2+</h3>
                        <p>Years Coding</p>
                    </div>
                </div>

                <div className="work-about">
                    <a href="#portfolio" className="btn-view-work">
                        VIEW MY WORK <i className='bx bx-down-right-arrow-alt'></i>
                    </a>
                    <a href="https://github.com/aryaadev" target="_blank" rel="noreferrer" className="btn-github">
                        <i className='bx bxl-github'></i> GITHUB
                    </a>
                </div>
            </div>
        </section>
    );
}
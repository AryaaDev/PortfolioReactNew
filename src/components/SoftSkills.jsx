export default function SoftSkills() {
    return (
        <section id="SoftSkills" className="skills-bento-section">
            <div className="global-section-header">
                <h2>Skills & <span>Expertise</span></h2>
                <p>Kombinasi keahlian teknis dan interpersonal yang saya gunakan untuk membangun solusi digital.</p>
            </div>

            <div className="bento-grid">
                
                {/* KARTU 1: Problem Solving & Logic */}
                <div className="bento-card">
                    <div className="bento-icon"><i className="bx bx-brain"></i></div>
                    <h3>Problem Solving & Logic</h3>
                    <p>Mendekati tantangan teknis dengan pemikiran analitis yang praktis dan berorientasi pada solusi sistematis.</p>
                </div>

                {/* KARTU 2: Performa & UX */}
                <div className="bento-card">
                    <div className="bento-icon"><i className="bx bx-tachometer"></i></div>
                    <h3>Performa & UX</h3>
                    <p>Mempertimbangkan performa, efisiensi, dan pengalaman pengguna dalam implementasi.</p>
                </div>

                {/* KARTU 3: Clean Code & Architecture */}
                <div className="bento-card">
                    <div className="bento-icon"><i className="bx bx-layer"></i></div>
                    <h3>Clean Code & Architecture</h3>
                    <p>Menulis kode yang bersih, terstruktur, dan mudah dipelihara dengan menerapkan praktik terbaik dalam pengembangan perangkat lunak.</p>
                </div>

                {/* KARTU 4: Adaptability & Continuous Learning */}
                <div className="bento-card">
                    <div className="bento-icon"><i className="bx bx-trending-up"></i></div>
                    <h3>Adaptability & Growth</h3>
                    <p>Cepat beradaptasi dengan teknologi baru dan berkomitmen penuh pada peningkatan kualitas kode berkelanjutan.</p>
                </div>

                {/* KARTU 5: Professionalism & Communication */}
                <div className="bento-card">
                    <div className="bento-icon"><i className="bx bx-user-check"></i></div>
                    <h3>Collaboration Mindset</h3>
                    <p>Berkomunikasi secara efektif dan bertanggung jawab penuh untuk memastikan keselarasan dalam setiap proyek.</p>
                </div>

                {/* KARTU 6: Project Leadership & Execution */}
                <div className="bento-card">
                    <div className="bento-icon"><i className="bx bx-rocket"></i></div>
                    <h3>Zero-to-One Execution</h3>
                    <p>Memimpin pengembangan teknis secara mandiri dari tahap inisiasi kode, konfigurasi server, hingga deployment ke tahap produksi.</p>
                </div>

            </div>
        </section>
    );
}
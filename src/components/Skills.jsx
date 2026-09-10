export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="global-section-header">
                <h2>Technical <span>Skills</span></h2>
                <p>Berikut kemampuan yang sudah saya pelajari sejauh ini</p>
            </div>
            
            <div className="skills-container">

                {/* KATEGORI 1: Frontend & Web */}
                <div className="skill-category skill">
                    <div className="category-header">
                        <div className="category-line"></div>
                        <h3>Web Development</h3>
                    </div>
                    <div className="skill-grid">
                        <div className="skill-item" style={{ '--brand': '#E34F26' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
                            <span>HTML</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#1572B6' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
                            <span>CSS</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#F7DF1E' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <span>JavaScript</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#61DAFB' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                            <span>React.js</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#06B6D4' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#7952B3' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                            <span>Bootstrap</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#777BB4' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" />
                            <span>PHP</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#339933' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                            <span>Node.js</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#ffffff' }}>
                            <img src="https://cdn.simpleicons.org/express/white" alt="Express.js" />
                            <span>Express.js</span>
                        </div>
                    </div>
                </div>

                {/* KATEGORI 2: Backend & Mobile App */}
                <div className="skill-category skill">
                    <div className="category-header">
                        <div className="category-line"></div>
                        <h3>Software & Mobile</h3>
                    </div>
                    <div className="skill-grid">
                        <div className="skill-item" style={{ '--brand': '#3776AB' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                            <span>Python</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#007396' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                            <span>Java</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#00ADD8' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" alt="Golang" />
                            <span>Golang</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#A8B9CC' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" />
                            <span>C</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#0175C2' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" alt="Dart" />
                            <span>Dart</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#3DDC84' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" />
                            <span>Android Studio</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#02569B' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" />
                            <span>Flutter</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#61DAFB' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Native" />
                            <span>React Native</span>
                        </div>
                    </div>
                </div>

                {/* KATEGORI 3: Database & Design */}
                <div className="skill-category skill">
                    <div className="category-header">
                        <div className="category-line"></div>
                        <h3>Database & Design</h3>
                    </div>
                    <div className="skill-grid">
                        <div className="skill-item" style={{ '--brand': '#4479A1' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" />
                            <span>MySQL</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#336791' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                            <span>PostgreSQL</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#47A248' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                            <span>MongoDB</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#FFCA28' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" />
                            <span>Firebase</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#003B57' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                            <span>SQLite</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#F24E1E' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />
                            <span>Figma</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#00C4CC' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" />
                            <span>Canva</span>
                        </div>
                    </div>
                </div>

                {/* KATEGORI 4: OS & Deployment */}
                <div className="skill-category skill">
                    <div className="category-header">
                        <div className="category-line"></div>
                        <h3>OS & Deployment</h3>
                    </div>
                    <div className="skill-grid">
                        <div className="skill-item" style={{ '--brand': '#FCC624' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" />
                            <span>Linux</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#E95420' }}>
                            <img src="https://cdn.simpleicons.org/ubuntu" alt="Ubuntu" />
                            <span>Ubuntu</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#0078D6' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" alt="Windows" />
                            <span>Windows</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#ffffff' }}>
                            <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
                            <span>GitHub</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#38AFBB' }}>
                            <img src="https://cdn.simpleicons.org/netlify/00C7B7" alt="Netlify" />
                            <span>Netlify</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#ffffff' }}>
                            <img src="https://cdn.simpleicons.org/vercel/white" alt="Vercel" />
                            <span>Vercel</span>
                        </div>
                    </div>
                </div>

                {/* KATEGORI 5: Tools & AI */}
                <div className="skill-category skill">
                    <div className="category-header">
                        <div className="category-line"></div>
                        <h3>Tools & AI</h3>
                    </div>
                    <div className="skill-grid">
                        <div className="skill-item" style={{ '--brand': '#F05032' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                            <span>Git</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#FF6C37' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" />
                            <span>Postman</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#ffffff' }}>
                            <img src="https://cdn.simpleicons.org/githubcopilot/white" alt="GitHub Copilot" />
                            <span>Copilot</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#10A37F' }}>
                        {/* Menggunakan Data URI Raw SVG agar kebal dari Adblocker */}
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6464 4.4708 4.4708 0 0 1 .5346 3.0137l-.1419-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685v-2.3324zM8.9015 3.3033a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V7.7977a4.504 4.504 0 0 1 4.4945-4.4944zm6.4004 4.0906-5.8144-3.3543 2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1 1.6711 6.1408 4.485 4.485 0 0 1-2.3655 1.9728V10.0704a.7664.7664 0 0 0-.3879-.6765zM12.0122 13.923l-3.349-1.9357V8.1186l3.349-1.9356 3.349 1.9356v3.8687z'/%3E%3C/svg%3E" alt="ChatGPT" />
                        <span>ChatGPT</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#8E75B2' }}>
                            {/* Tambahan Gemini AI */}
                            <img src="https://cdn.simpleicons.org/googlegemini/white" alt="Gemini AI" />
                            <span>Gemini</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#D97757' }}>
                            {/* Tambahan Claude AI */}
                            <img src="https://cdn.simpleicons.org/anthropic/white" alt="Claude AI" />
                            <span>Claude</span>
                        </div>
                    </div>
                </div>

                {/* KATEGORI 6: Workflow & Collab */}
                <div className="skill-category skill">
                    <div className="category-header">
                        <div className="category-line"></div>
                        <h3>Workflow & Collab</h3>
                    </div>
                    <div className="skill-grid">
                        <div className="skill-item" style={{ '--brand': '#0052CC' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" />
                            <span>Jira</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#0052CC' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg" alt="Trello" />
                            <span>Trello</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#ffffff' }}>
                            <img src="https://cdn.simpleicons.org/notion/white" alt="Notion" />
                            <span>Notion</span>
                        </div>
                        <div className="skill-item" style={{ '--brand': '#4A154B' }}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" alt="Slack" />
                            <span>Slack</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}